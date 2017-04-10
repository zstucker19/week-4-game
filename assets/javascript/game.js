$(document).ready(function() {

	//Declare Variables


	var possibleEndArray = [];
		//push all numbers between 19 and 120 into an array
		for(var i = 19; i < 121; i++) {
			possibleEndArray.push(i);
		}

	var possibleNumArray = [];
		//push all numbers between 1 and 12 into an array
		for(var i = 1; i < 13; i++) {
			possibleNumArray.push(i);
		}

	var randomNumCrystal;
	var randomEndNum;
	var totalValue = 0;
	var wins = 0;
	var losses = 0;
	var initialized = false;
	console.log(possibleEndArray)
	//displays opening message
	$("#current-number").html("Click a Crystal!");

	//Starting point to begin game
	var initializeGame = function() {

	//resets our running total
	totalValue = 0;

	//finds our random end number
	for(i = 0; i < possibleEndArray.length; i++) {
		randomEndNum = possibleEndArray[Math.floor(Math.random() * possibleEndArray.length)];
		$("#current-number").attr("data-openNum", randomEndNum)
	}

	//finds our random number for first crystal
	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-1").attr("data-hiddenNum", randomNumCrystal);
	}

	//finds our random number for second crystal
	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-2").attr("data-hiddenNum", randomNumCrystal);
	}

	//finds our random number for third crystal
	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-3").attr("data-hiddenNum", randomNumCrystal);
	}

	//finds our random number for fourth crystal
	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-4").attr("data-hiddenNum", randomNumCrystal);
	}

	//displays our random end number and total
	$("#current-number").html(randomEndNum);
	$("#total-number").html(totalValue);
	};



	//begins on clicking a crystal
	$(".crystal-image").on("click", function() {

		//checks if game has already begun
		if(!initialized) {
			initialized = true;
			initializeGame();
		}

			//alerts the value of crystal, turns it into a number
			//displays our total value at the bottom of page
			var value = $(this).attr("data-hiddenNum");
			value = parseInt(value);
			alert(value);
			totalValue += value;
			$("#total-number").html(totalValue);

			//determines if we have won or lost and increases win/loss toal
			//also alerts and re-initializes the game
			if(totalValue === randomEndNum) {
				wins++;
				alert("Congrats!");
				$("#win-change").html(wins);
				initializeGame();
			}
			if(totalValue > randomEndNum) {
				losses++;
				alert("Sorry. Try Again!");
				$("#loss-change").html(losses);
				initializeGame();
			}
	});
});
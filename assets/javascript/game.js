$(document).ready(function() {

	//Declare Variables
	var possibleNumArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	var possibleEndArray = [50, 60, 70, 80, 90, 100];
	var randomNumCrystal;
	var randomEndNum = possibleEndArray[Math.floor(Math.random() * possibleEndArray.length)];
	var totalValue = 0;
	var wins = 0;
	var losses = 0;
	var initialized = false;

	//displays the first number we are searching for on page
	$("#current-number").html(randomEndNum);

	//Starting point to begin game
	var initializeGame = function() {
	possibleNumArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	randomNumCrystal;
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
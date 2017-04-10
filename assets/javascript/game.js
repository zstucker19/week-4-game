$(document).ready(function() {
	var possibleNumArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	var possibleEndArray = [50, 60, 70, 80, 90, 100];
	var randomNumCrystal;
	var randomEndNum;
	var totalValue = 0;
	var wins = 0;
	var losses = 0;
	var initialized = false;



	var initializeGame = function() {
	possibleNumArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	randomNumCrystal;
	totalValue = 0;
	for(i = 0; i < possibleEndArray.length; i++) {
		randomEndNum = possibleEndArray[Math.floor(Math.random() * possibleEndArray.length)];
		$("#current-number").attr("data-openNum", randomEndNum)
	}

	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-1").attr("data-hiddenNum", randomNumCrystal);
	}

	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-2").attr("data-hiddenNum", randomNumCrystal);
	}

	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-3").attr("data-hiddenNum", randomNumCrystal);
	}

	for(i = 0; i < possibleNumArray.length; i++) {
		randomNumCrystal = possibleNumArray[Math.floor(Math.random() * possibleNumArray.length)];
		$("#img-4").attr("data-hiddenNum", randomNumCrystal);
	}

	$("#current-number").html(randomEndNum);
	$("#total-number").html(totalValue);
	};



	$(".crystal-image").on("click", function() {
		if(!initialized) {
			initialized = true;
			initializeGame();
		}
			var value = $(this).attr("data-hiddenNum");
			value = parseInt(value);
			alert(value);
			$("#current-number").html(randomEndNum);
			totalValue += value;
			$("#total-number").html(totalValue);
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
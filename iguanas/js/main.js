
$(function() {

	// things you want to happen once the page has loaded go after this line

	var iggy3Hidden = false;

	// wait for the user to mouse over the first iguana picture
	$("img#iggy1").mouseover(function() {
		// what to do when the user has moused over
		$("img#iggy1").attr("src", "images/iguana1_skeleton.jpg");
	});

	// wait for the user to mouse out of the first iguana picture
	$("img#iggy1").mouseout(function() {
		// what to do when the user has moused over
		$("img#iggy1").attr("src", "images/iguana1.jpg");
	});

	// wait for the user to mouse over the second iguana picture
	$("img#iggy2").mouseover(function() {
		// what to do when the user has moused over
		$("img#iggy1").css("width", "149px");
		$("img#iggy2").css("width", "449px");
		$("img#iggy3").css("width", "149px");
	});

	// wait for the user to mouse out of the second iguana picture
	$("img#iggy2").mouseout(function() {
		// what to do when the user has moused over
		$("img#iggy1").css("width", "249px");
		$("img#iggy2").css("width", "249px");
		$("img#iggy3").css("width", "249px");
	});

	// wait for the user to mouse over the third iguana picture
	$("img#iggy3").mouseover(function() {
		// what to do when the user has moused over
		if (iggy3Hidden == false) {
			$("img#iggy3").hide();
			$("div#button_container").show();
		}
		iggy3Hidden = true;
	});


	// wait for the user to click the button
	$("input#show_iggy3").click(function() {
		// what to do when the user has moused over
		$("img#iggy3").show();
		$("div#button_container").hide();
	});

	// wait for the user to press a key anywhere in the document
	$(document).keyup(function(e) {

		// determine whether they pressed the space key
		if (e.keyCode == 32) {

			// do some stuff here that you want to do in response to space bar press

			// make sure the car starts out not rotated at all
			$("img#convertible").css("transform", "rotate(0deg)");

			// make sure the car is all the way at the bottom of the container after any previous driving... it didn't look right without this
			$("img#convertible").css("top", $("div.container").height() - $("img#convertible").height()/2);


			// animate the car to the bottom left of the container
			$("img#convertible").animate({
				"left": "0px"
			}, 2000, function() {
				// once the car is at the bottom left of the container...

				// rotate the car 90 degrees, so it is facing up
				$("img#convertible").css("transform", "rotate(90deg)");

				// make sure the car is all the way to the left of the container after rotation... it didn't look right without this
				$("img#convertible").css("left", 0 - $("img#convertible").width()/4);

				// animate the car to the top left of the container
				$("img#convertible").animate({
					"top": "0px"
				}, 2000, function() {
					// once the car is at the top left of the container...

					// rotate the car another 90 degrees, so it is upside-down facing to the right
					$("img#convertible").css("transform", "rotate(180deg)");

					// animate the car to the top right of the container
					$("img#convertible").animate({
						"left": $("div.container").width() - $("img#convertible").width()
					}, 2000, function() {
						// once the car is at the top right of the container...

						// rotate the car another 90 degrees, so it is facing down
						$("img#convertible").css("transform", "rotate(270deg)");

						// make sure the car is all the way to the right of the container after rotation... it didn't look right without this
						$("img#convertible").css("left", $("div.container").width() - $("img#convertible").width()/2);

						// animate the car to the bottom right of the container
						$("img#convertible").animate({
							"top": $("div.container").height() - $("img#convertible").height()
						}, 1000);

					});
				});

			});
		}
	});






});
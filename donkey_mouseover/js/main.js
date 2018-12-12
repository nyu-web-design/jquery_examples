//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS


	//make the donkey fade in over 2 seconds (i.e. 2000ms)!
	$("img#donkey").fadeIn(2000);

	//do something when the user mouses over the button
	$("input#button1").mouseover(function() {
		//BEGIN DO WHATEVER YOU WANT WHEN USER MOUSES OVER

		$("img#donkey").hide();
		$("input#button1").val("Mouseout of me!");

		//END DO WHATEVER YOU WANT WHEN USER MOUSES OVER
	});

	//do something when the user mouses out of the button
	$("input#button1").mouseout(function() {
		//BEGIN DO WHATEVER YOU WANT WHEN USER MOUSES OUT

		$("img#donkey").show();
		$("input#button1").val("Mouseover me!");

		//END DO WHATEVER YOU WANT WHEN USER MOUSES OUT
	});



	//END DO WHATEVER YOU WANT WHEN PAGE LOADS

//end waiting for the page to load
});

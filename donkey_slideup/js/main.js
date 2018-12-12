//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS


	//make the donkey fade in over 2 seconds (i.e. 2000ms)!
	$("img#donkey").fadeIn(2000);

	//do something when the user clicks the button
	$("input#button1").click(function() {
		//BEGIN DO WHATEVER YOU WANT WHEN BUTTON IS CLICKED

		$("img#donkey").slideToggle();

		//END DO WHATEVER YOU WANT WHEN BUTTON IS CLICKED
	});


	//END DO WHATEVER YOU WANT WHEN PAGE LOADS

//end waiting for the page to load
});

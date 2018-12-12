//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS

	//do something when the user types a character into the text field
	$("input#text_input").keyup(function() {
		//BEGIN DO WHATEVER YOU WANT WHEN USER TYPES A CHARACTER

		//change the text nested inside the h1 element to be the text in the text field
		//$("h1").text("Foo Bar");
		$("h1").text($("input#text_input").val());

		//END DO WHATEVER YOU WANT WHEN USER TYPES A CHARACTER
	});

	//do something when the user clicks the reset button
	$("input#reset").click(function() {
		//BEGIN DO WHATEVER YOU WANT WHEN USER CLICKS THE BUTTON

		//reset the text nested inside the heading element
		$("h1").text("JQuery Basic Example");

		//reset the value of the input text field
		$("input#text_input").val("");

		//END DO WHATEVER YOU WANT WHEN USER CLICKS THE BUTTON
	});



	//END DO WHATEVER YOU WANT WHEN PAGE LOADS

//end waiting for the page to load
});

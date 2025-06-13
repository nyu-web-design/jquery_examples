//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS

	//load up the current value stored in the Firebase database
	firebase.database().ref("latest_message").on('value', function(snapshot) {
		//BEGIN WHAT TO DO WITH THE VALUE FROM THE FIREBASE DATABASE

		//get the value from the database
		var value = snapshot.val();

		//put it into the page as paragraph text
		$("blockquote#latest_message").text(value);

		//END WHAT TO DO WITH THE VALUE FROM THE FIREBASE DATABASE
	});


	//when the user clicks the save button, we will save the data in the text field to our Firebase database
	$("form#message_form").submit(function(e) {
		//BEGIN WHAT TO DO WHEN THE USER SUBMITS THE FORM

		//get the value you want to save to the Firebase database from the text input
		var value = $("input#my_message").val();

		//save it to the Firebase database into the field called 'latest_value'
		firebase.database().ref("latest_message").set(value);

		//wipe out the text from the text input on the page
		$("input#my_message").val("");

		//prevent the form from loading a new page
		//we have to do this because submitting a form is usually like clicking a link in that it causes the browser to load a new page, which we don't want here.
		e.preventDefault();

		//END WHAT TO DO WHEN THE USER SUBMITS THE FORM
	});


	//END DO WHATEVER YOU WANT WHEN PAGE LOADS

//end waiting for the page to load
});

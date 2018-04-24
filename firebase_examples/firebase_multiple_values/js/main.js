//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS

	//whenever a new value is added to this list in the Firebase database, put the new message onto the web page
	firebase.database().ref("all_messages").on('child_added', function(childSnapshot) {
		//BEGIN WHAT TO DO WHEN THERE IS A NEW VALUE IN THE LIST

		//get the value that was added to the list
		var value = childSnapshot.val();

		//create a new article tag and put it at the beggining of the section#messages
		$("<article><blockquote>" + value + "</blockquote></article>").prependTo("section#messages");

		//END WHAT TO DO WHEN THERE IS A NEW VALUE IN THE LIST
	});

	//when the user clicks the save button, we will save the data in the text field to our Firebase database
	$("form#message_form").submit(function(e) {
		//BEGIN WHAT TO DO WHEN THE USER SUBMITS THE FORM

		//get the new value you want to save to the Firebase database from the text input
		var value = $("input#my_message").val();

		//add the value to the list
		firebase.database().ref("all_messages").push(value);

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

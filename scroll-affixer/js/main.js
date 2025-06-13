//wait until the page loads...
$(function() {

	//determine the starting position of the element we want to fix
	var affixStartingPosY = $("#affix").position().top;

	//then wait until the user scrolls the document...
	$(document).scroll(function() {

		//... and do the following each time the user scrolls

		//get the total amount the user has scrolled the document in pixels
		var scrollPosY = $(document).scrollTop();

		//check whether the user has scrolled past the position of the element we want to affix...
		if (scrollPosY >= affixStartingPosY) {
			//if so... make the element stuck on the page and not scroll with the rest of the page
			$("#affix").css("position", "fixed"); //set it so it doesn't scroll with the page anymore
		}
		else {
			//if not... make the element scroll with the rest of the page, as usual.
			$("#affix").css("position", "static"); //set it back to normal scroll behavior
		}

	});

});	
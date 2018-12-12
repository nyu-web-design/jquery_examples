
$(function() {

	// put stuff below here that you want to have happen once the page has loaded
	//alert("Hello world!");

	// detect when the user mouses over the paragraph
	$("p#special").mouseover(function() {
		// put below here what you want to have done when the user mouses over this paragraph
		alert("You moused over!");		
	});

	// detect when the user clicks the heading
	$("h1").click(function() {
		// put below here what you want to have done when the user clicks on the heading
		alert("You clicked the heading!");
	});

	// detect hovering over the giraffe image
	$("img#giraffe").mouseover(function() {
		// put below here the stuff you want to do when the user mouses over the giraffe image
		$("img#giraffe").attr("src", "images/giraffe_left_looking.jpg");
	});

	// detect hovering out of the giraffe image
	$("img#giraffe").mouseout(function() {
		// put below here the stuff you want to do when the user mouses over the giraffe image
		$("img#giraffe").attr("src", "images/giraffe_right_looking.jpg");
	});

	// detect click on the button
	$("input#clickme").click(function() {
		// put below here what you want done when the user clicks the buttonm
		$("h2.fireworks").show(); // change the display property to block
	});

	// detect typing into the text input
	$("input#textinput").keyup(function() {
		// change color of the container's background
		$("div.container").css("background-color", getRandomColor());
	});


});




// don't pay attention to this!
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


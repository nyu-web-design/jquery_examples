
$(function() {
	//anything below here will execute after the page loads

	//debugging:
	//alert("Hello!");

	//change the title of the page... just because we can...
	$("h1").text("Pink Flower");

	//detect when the user has moused over the image
	$("img#freckles").mouseover(function() {
		//anything below here will execute after the user mouses over this image

		//debugging:
		//alert("Moused over!");

		//change the image to another flower image
		$("img#freckles").attr("src", "images/flower2.jpg");

		//anything above here will execute after the user mouses over this image
	});

	//detect when the user has moused out of the image
	$("img#freckles").mouseout(function() {
		//anything below here will execute after the user mouses over this image

		//debugging:
		//alert("Moused out!");

		//change the image to another flower image
		$("img#freckles").attr("src", "images/flower.jpg");

		//anything above here will execute after the user mouses over this image
	});	

	//detect when the user has clicked the hamburger and made it smaller
	var littleBurger = false;

	$("img#hamburger").click(function() {
		//anything below here will execute after the user has clicked the hamburger

		//check whether the user has not yet clicked this image
		if (littleBurger == false) {

			//shrink the size of the image
			$("img#hamburger").css({
				width: "320px",
				height: "213px"
			});

			//remember from now on that the user did click this already
			littleBurger = true;

		}

		//otherwise, if the hamburger is little right now
		else if (littleBurger == true) {

			//expand the sizd of the image
			$("img#hamburger").css({
				width: "640px",
				height: "426px"
			});

			//remember from now on that the user did click this and made it big again
			littleBurger = false;
		}

		//anything above here will execute after the user has clicked the hamburger
	});


	//make the title look like it's being typed one letter at a time

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("P");
	}, 250);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pi");
	}, 500);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pin");
	}, 750);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink");
	}, 1000);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink F");
	}, 1250);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink Fl");
	}, 1500);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink Flo");
	}, 1750);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink Flow");
	}, 2000);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink Flowe");
	}, 2250);

	//set a timer
	setTimeout(function() {
		//set the title to one thing...
		$("h1").text("Pink Flower");
	}, 2500);


	//the speed the airplane will move in the x and y directions
	var speedX = 20;
	var speedY = 1;

	//make the airplane move every fraction of a second
	setInterval(function() {

		//calculate the airplane's next position by adding these two speed numbers to its current left and top position
		var newLeft = $("img#airplane").position().left + speedX + "px";
		var newTop = $("img#airplane").position().top + speedY + "px";

		//move the airplane to the new location
		$("img#airplane").css({
			left: newLeft,
			top: newTop
		});

		//if the airplane has gone off screen to the right side, start it back to the left of the screen
		if ($("img#airplane").position().left > $(window).width()) {
			//start from the left side again
			$("img#airplane").css({
				left: "0px"
			});
		}

		//if the airplane has gone off screen to the left side, start it back to the right of the screen
		if ($("img#airplane").position().left < 0) {
			//start from the left side again
			$("img#airplane").css({
				left: $(window).width() + "px"
			});
		}

		//if the airplane has gone off screen to the bottom, start it back at the top of the screen
		if ($("img#airplane").position().top > $(window).height()) {
			//start from the left side again
			$("img#airplane").css({
				top: "0px"
			});
		}

		//if the airplane has gone off screen to the top, start it back at the bottom of the screen
		if ($("img#airplane").position().top < 0) {
			//start from the left side again
			$("img#airplane").css({
				top: $(window).height() + "px"
			});
		}

	}, 20);

	//assume the airplane is facing right for starters
	var airplaneDirection = "right";

	//if the user clicks the airplane, make it reverse direction
	$("img#airplane").click(function() {
		//if the airplane is facing right, make it go left
		if (airplaneDirection == "right") {
			//reverse the direction by inverting the sign of the speedX
			speedX = speedX * -1;

			//change the image to a photo of the plane facing left
			$("img#airplane").attr("src", "images/airplane_left.png");

			//remember that it is now facing left
			airplaneDirection = "left";
		}

		//otherwise, if the airplane is facing left, make it go right
		else {
			//reverse the direction by inverting the sign of the speedX
			speedX = speedX * -1;

			//change the image to a photo of the plane facing right
			$("img#airplane").attr("src", "images/airplane_right.png");

			//remember that it is now facing right
			airplaneDirection = "right";
		}		
	});


	//anything above here will execute after the page loads
});
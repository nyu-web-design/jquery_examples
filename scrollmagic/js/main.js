//begin wating for the page to load
$( function() {

	//BEGIN DO WHATEVER YOU WANT WHEN PAGE LOADS


	//BEGIN SCROLLMAGIC STUFF

		// init controller.. you need this once
		var controller = new ScrollMagic.Controller();

		/* build scene 1 */
		//when article1 comes into view, make it  twice as big
		var scene = new ScrollMagic.Scene({
							triggerElement: "#article1",
						})
						.setTween("#article1", 1.5, {scale: 2}) // trigger a TweenMax.to tween
						.addTo(controller);

		/* build scene 2 */
		//when article2 comes into view, make it fade out
		var scene = new ScrollMagic.Scene({
							triggerElement: "#article2"
						})
						.setTween("#article2", 1.5, {opacity: 0}) // trigger a TweenMax.to tween
						.addTo(controller);


		/* build scene 3 */
		//when article 3 comes into view, make it rotate 360 degrees 
		// build tween first
		var tween = TweenMax.to("#article3", 1, {rotation: 360, ease: Linear.easeNone});
		// build scene
		var scene = new ScrollMagic.Scene({
							triggerElement: "#article3", 
							duration: 300,
							offset: 150
						})
						.setTween(tween)
						.setPin("#article3", {pushFollowers: true})
						.addTo(controller);

		/* build scene  4 */
		//when article4 comes into view, make it oscillate back and forth
		//build tween first
		var tween = TweenMax.fromTo("#article4", 1,
			{left: -200},
			{left: 200, repeat: -1, yoyo: true, ease: Circ.easeInOut}
		);
		//add to scene
		var scene = new ScrollMagic.Scene({
							triggerElement: "#article4", 
							duration: 200, 
							offset: -50
						})
						.setTween(tween) // trigger a TweenMax.to tween
						.addTo(controller);


	//END SCROLLMAGIC STUFF -->


	//END DO WHATEVER YOU WANT WHEN PAGE LOADS

//end waiting for the page to load
});

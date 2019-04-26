// wait for the page to load
$(function() {
  
    //pop up an annoying little box with a message in it
    //alert("Hello world!");

    // show a secret message to anyone who has the Developer Tools console open in their browser
    console.log("Hey there! Did you know, you can click the second blueberry for a secret message!");
    console.log("And you can also type into the search field to make the first blueberry move around.");

    // wait for the user to mouse over the any blueberry image
    $("img.berry").mouseover(function() {

        // change the src file of the image when they do
        $(this).attr("src", "images/blueberry_hover.png");

    });
    
    // wait for the user to mouse out of any blueberry image
    $("img.berry").mouseout(function() {

        // change the src file of the image when they do
        $(this).attr("src", "images/blueberry.png");
        
    });


    // wait for the user to click on the second blueberry image
    $("article#second_thing").click(function() {

        // change the text in the first paragraph when they do
        $("p#first_paragraph").text("Thank you for clicking the blueberry!");

    });

    // wait for the user to press and release a key in the search field
    $("input[type='search']").keyup(function(e) {

        // animate the first blueberry when they do... stop any previous animation that is still in progress
        $("article#first_thing").stop().animate({
            // move it + or - 15 pixels from its current top and left position of the berry
            "left": (Math.random()*30 - 15),
            "top": (Math.random()*30 - 15)
        });

        // and just for fun, replace the paragraph text for the value of the text input field
        $("p#second_paragraph").text($("input[type='search']").val())

    });

});
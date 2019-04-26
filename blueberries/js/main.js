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
    $("input[type='search']").keyup(function() {

        // animate the first blueberry when they do
        $("article#first_thing").animate({
            // add 30px to the current top and left position of the berry
            "left": $("article#first_thing").position().left + 30,
            "top": $("article#first_thing").position().top + 30
        });

    });

});
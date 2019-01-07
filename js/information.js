// Upon toggling the "show more" button, div will appear
jQuery(document).ready(function($)
{
    // Booleans are created to check if div
    // is currently being displayed or not.
    var bool1 = false;
    var bool2 = false;
    var bool3 = false;
    // Growth Button
    var btn = document.getElementById("toggle1");
    btn.onclick = function() {
        if (bool2 == true) {
            $(".toggled2").slideToggle("slow");
            bool2 = false;
        }
        if (bool3 == true) {
            $(".toggled3").slideToggle("slow");
            bool3 = false;
        }
        $(".toggled1").slideToggle("slow");
        bool1 = true;
    }
    // Optimization Button
    var btn2 = document.getElementById("toggle2");
    btn2.onclick = function() {
        if (bool1 == true) {
            $(".toggled1").slideToggle("slow");
            bool1 = false;
        }
        if (bool3 == true) {
            $(".toggled3").slideToggle("slow");
            bool3 = false;
        }
        $(".toggled2").slideToggle("slow");
        bool2 = true;
    }
    // Storage Button
    var btn3 = document.getElementById("toggle3");
    btn3.onclick = function() {
        if (bool2 == true) {
            $(".toggled2").slideToggle("slow");
            bool2 = false;
        }
        if (bool1 == true) {
            $(".toggled1").slideToggle("slow");
            bool1 = false;
        }
        $(".toggled3").slideToggle("slow");
        bool3 = true;
    }

    // Here I created a whole new set of buttons
    // For the purpose that the content is now
    // Directly shown under the button
    // This is for viewing on smaller devices
    // Growth Button
    var btn4 = document.getElementById("toggle4");
    btn4.onclick = function() {
        // Bools aren't changed because in this view,
        // old bools wouldn't have been toggled true or false
        if (bool2 == true) {
            $(".toggled5").slideToggle("slow");
            bool2 = false;
        }
        if (bool3 == true) {
            $(".toggled6").slideToggle("slow");
            bool3 = false;
        }
        $(".toggled4").slideToggle("slow");
        bool1 = true;
    }
    // Optimization Button
    var btn5 = document.getElementById("toggle5");
    btn5.onclick = function() {
        if (bool1 == true) {
            $(".toggled4").slideToggle("slow");
            bool1 = false;
        }
        if (bool3 == true) {
            $(".toggled6").slideToggle("slow");
            bool3 = false;
        }
        $(".toggled5").slideToggle("slow");
        bool2 = true;
    }
    // Storage Button
    var btn6 = document.getElementById("toggle6");
    btn6.onclick = function() {
        if (bool2 == true) {
            $(".toggled5").slideToggle("slow");
            bool2 = false;
        }
        if (bool1 == true) {
            $(".toggled4").slideToggle("slow");
            bool1 = false;
        }
        $(".toggled6").slideToggle("slow");
        bool3 = true;
    }
});

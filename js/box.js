jQuery(document).ready(function($)
{
    var bool1, bool2, bool3, bool4, bool5, bool6, bool7, bool8, bool9, bool10 = false;

    // Checks to make sure bools are false
    // If they are true, toggle their view
    // and set their value to false
    function check() {
        if (bool1) {
            console.log("Bool1 = ");
            console.log(bool1);
            $("#toggled1").slideToggle("slow");
            bool1 = false;
        }
        if (bool2) {
            console.log("Bool2 = ");
            console.log(bool2);
            $("#toggled2").slideToggle("slow");
            bool2 = false;
        }
        if (bool3) {
            console.log("Bool3 = ");
            console.log(bool3);
            $("#toggled3").slideToggle("slow");
            bool3 = false;
        }
        if (bool4) {
            console.log("Bool4 = ");
            console.log(bool4);
            $("#toggled4").slideToggle("slow");
            bool4 = false;
        }
        if (bool5) {
            console.log("Bool5 = ");
            console.log(bool5);
            $("#toggled5").slideToggle("slow");
            bool5 = false;
        }
        if (bool6) {
            console.log("Bool6 = ");
            console.log(bool6);
            $("#toggled6").slideToggle("slow");
            bool6 = false;
        }
        if (bool7) {
            console.log("Bool7 = ");
            console.log(bool7);
            $("#toggled7").slideToggle("slow");
            bool7 = false;
        }
        if (bool8) {
            console.log("Bool8 = ");
            console.log(bool8);
            $("#toggled8").slideToggle("slow");
            bool8 = false;
        }
        if (bool9) {
            console.log("Bool9 = ");
            console.log(bool9);
            $("#toggled9").slideToggle("slow");
            bool9 = false;
        }
        if (bool10) {
            console.log("Bool10 = ");
            console.log(bool10);
            $("#toggled10").slideToggle("slow");
            bool10 = false;
        }
    }

    // "Event Listeners"
    // If div is clicked, fires off check function
    // Make sure only div that is clicked is true
    // Then toggle div
    $("#box1").click(function() {
        check();
        bool1 = true;
        $("#toggled1").slideToggle("slow");
    });
    $("#box2").click(function() {
        check();
        bool2 = true;
        $("#toggled2").slideToggle("slow");
    });
    $("#box3").click(function() {
        check();
        bool3 = true;
        $("#toggled3").slideToggle("slow");
    });
    $("#box4").click(function() {
        check();
        bool4 = true;
        $("#toggled4").slideToggle("slow");
    });
    $("#box5").click(function() {
        check();
        bool5 = true;
        $("#toggled5").slideToggle("slow");
    });
    $("#box6").click(function() {
        check();
        bool6 = true;
        $("#toggled6").slideToggle("slow");
    });
    $("#box7").click(function() {
        check();
        bool7 = true;
        $("#toggled1").slideToggle("slow");
    });
    $("#box8").click(function() {
        check();
        bool8 = true;
        $("#toggled8").slideToggle("slow");
    });
    $("#box9").click(function() {
        check();
        bool9 = true;
        $("#toggled9").slideToggle("slow");
    });
    $("#box10").click(function() {
        check();
        bool10 = true;
        $("#toggled10").slideToggle("slow");
    });
});

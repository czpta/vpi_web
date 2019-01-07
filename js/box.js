jQuery(document).ready(function($)
{
    var boxName = ".boxToggle";
    // $this = $(this);
    // var activeBox = $(boxName + $("a").attr('class',boxName).data('number') - 1);
    // console.log(activeBox);

    var activeBox = $(".box-container").children("a");
    console.log(activeBox);
    //.boxToggle
    $(".boxToggle").click(function()
    {
        //.boxToggled
        $(".boxToggled").slideToggle( "slow");
    });
});

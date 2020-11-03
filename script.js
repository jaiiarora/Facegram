function opensignupForm()
{
    document.getElementById("sign-up-pop").style.display="block";
}
function closesignupForm()
{
    document.getElementById("sign-up-pop").style.display=none();
}

$(document).ready(function(){
    $('.header').height($(window).height());
  })

// Data Picker Initialization
//$('.datepicker').datepicker();

$(document).ready(function () {
    $('#date-picker-example').datepicker({
        format: "dd/mm/yyyy"
    });
});
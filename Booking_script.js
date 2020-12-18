/*jshint esversion: 6 */


/****** Covid-19 alert ******/
function serviceAlert()
{
    if(document.getElementById('serviceId').value ="2"){
        alert('If you have any Covid-19 sympthoms, please, do not walk-in in the clinics without a special appointment');
    }
}




/****** Navigation bar activity ******/
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navigationLinks = document.getElementsByClassName('navigation-links')[0];

/* Whenever the element "button" is click toggle is active*/
toggleButton.addEventListener('click',() => {
  navigationLinks.classList.toggle('active');
});




/* Date and time picker*/
jQuery(function($) {
        $("#datepicker").datetimepicker();
    });




/* Correct email Validator*/
$(document).ready(function() { 
 
    $('#button').click(function() {  
 
        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 
        var emailaddressVal = $("#UserEmail").val();
        if(emailaddressVal == '') {
            $("#UserEmail").after('<span class="error">                       Error: Please enter your email address.</span>');
            hasError = true;
        }
 
        else if(!emailReg.test(emailaddressVal)) {
            $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
            hasError = true;
        }
 
        if(hasError == true) { return false; }
 
    });
});

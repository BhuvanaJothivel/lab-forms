var username = document.forms['proform']['username'];
var emailId = document.forms['proform']['email'];
var PassWord = document.forms['proform']['password'];
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

$(function () {
    $('#submit').click(function () {
        var name = $('#usertext').val();
        var email = $('#emailtext').val();
        var password = $('#passwordtext').val();
        var pattern=/^[a-zA-Z0-9- ]*$/;
        if (pattern.test(name) == false) {
            username.style.border = '1px solid red';
            name_error.textContent = 'Special characters not allowed';
            username.focus();
            return false;
        }
        else if(name == "")
            name_error.textContent = 'This field is required';
        else if(email == "")      
            email_error.textContent = 'This field is required';
        else if(password == "")
            password_error.textContent = 'This field is required';
        if((pattern.test(name) == true)&& email != "" && password != "")
            alert('Welcome to CODEPRO!');
    });
});

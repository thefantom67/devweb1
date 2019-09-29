 $('#email').val().match(emailRegex);

//match email address
var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'; 
//match username
var usernameRegex = '/^[a-z0-9_-]{3,16}$/'; 
//match password
var passwordRegex = '/^[a-z0-9_-]{6,18}$/'; 
//Match 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords).
var passwordStrengthRegex = /((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm; 
//match elements that could contain a phone number
var phoneNumber = /[0-9-()+]{3,20}/; 
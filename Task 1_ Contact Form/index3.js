var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('message-error');
var sbmtError = document.getElementById('form-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.length < 3) {
        nameError.innerHTML = "Minimum 3 character is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber() {
    var phone = document.getElementById('contact-number').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = "Phone number should be 10 digit";
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is  required";
        return false;
    }

    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([com]{3})$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage() {
    var msg = document.getElementById('message').value;
    var required = 5;
    var left = required - msg.length;
    if (left > 0) {
        msgError.innerHTML = left + ' more character is  required';
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage() || !validateNumber()) {
        sbmtError.style.display = 'block';
        sbmtError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { sbmtError.style.display = 'none'; }, 3000);
        return false;
    }
}


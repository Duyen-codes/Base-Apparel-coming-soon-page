errMsg = document.querySelector('.err-msg');
errIcon = document.querySelector('.err-icon')
form = document.querySelector('#form');
formInput = document.querySelector('.form-input');
submitBtn = document.querySelector('.submit-btn');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/g;


submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if (formInput.value && emailRegex.test(formInput.value)) {
        formInput.classList.remove('error');
        formInput.value = "";
        errIcon.style.display = 'none';
        errMsg.style.display = "none";

    } else {
        formInput.classList.add('error');
        errMsg.innerHTML = "Please enter a valid email";
        errMsg.style.display = "block";
        errIcon.style.display = "block";
    }
});

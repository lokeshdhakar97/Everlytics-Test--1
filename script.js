const formSubmit = document.querySelector('form');
let inputAll = document.querySelectorAll('input');
let message = document.querySelector('.message');
let msg = document.querySelector('.msg');

formSubmit.addEventListener('submit', function (stop) {
    stop.preventDefault();
    checkInputValues();
});

function checkInputValues() {
    inputAll.forEach((elements) => {
        if (elements.value.trim().length < 5) {
            elements.style.border = '2px solid red'
        } else if (containsSpecialChars(elements.value.trim())) {
            elements.style.border = '2px solid red'
        } else if (notBeginWith(elements.value.trim().charAt(0))) {
            elements.style.border = '2px solid red';
        }
    });
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()\=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
function notBeginWith(str) {
    const beginWith = /[-+_]/;
    return beginWith.test(str);
}
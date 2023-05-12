"use strict";
const check = document.querySelector('.InCheckbox');
const inputStep = document.querySelector('#step');
const inputTime = document.querySelector('#time');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const xisob = document.querySelector('.collector');
const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const clear = document.querySelector('.x');
let yeguvchi = 0;
let stepNumber = 0;
let timeNumber = 0;
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!isNaN(Number(inputStep.value))) {
        stepNumber = +inputStep.value;
    }
    else if (isNaN(Number(inputStep.value))) {
        alert(`Stepga faqat son kiritish mumkin`);
    }
});
increment.addEventListener('click', function () {
    if (check.checked && timeNumber) {
        setTimeout(function () {
            yeguvchi += stepNumber;
            if (check.checked) {
                xisob.textContent = yeguvchi.toString();
            }
            ;
        }, timeNumber * 1000);
    }
    if (check.checked && timeNumber == 0) {
        alert('mumkinmas');
    }
    else if (!check.checked && timeNumber == 0) {
        yeguvchi += stepNumber;
        xisob.textContent = yeguvchi.toString();
    }
});
decrement.addEventListener('click', function () {
    if (check.checked && timeNumber) {
        setTimeout(function () {
            yeguvchi -= stepNumber;
            xisob.textContent = yeguvchi.toString();
        }, timeNumber * 1000);
    }
    if (check.checked && timeNumber == 0) {
        alert('mumkinmas');
    }
    else if (!check.checked && timeNumber == 0) {
        yeguvchi -= stepNumber;
        xisob.textContent = yeguvchi.toString();
    }
});
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    if (check.checked) {
        timeNumber = +inputTime.value;
    }
    if (!check.checked) {
        alert(`time kirg'azishtan oldin checkni belgilab qoyin `);
    }
});
clear.addEventListener('click', function () {
    check.checked = false;
    inputTime.value = '';
});
//# sourceMappingURL=main.js.map
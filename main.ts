"use strict";
const check: HTMLInputElement = document.querySelector('.InCheckbox') as HTMLInputElement;
const inputStep: HTMLInputElement = document.querySelector('#step') as HTMLInputElement;
const inputTime: HTMLInputElement = document.querySelector('#time') as HTMLInputElement;
const form1: HTMLFormElement = document.getElementById('form-1') as HTMLFormElement;
const form2: HTMLFormElement = document.getElementById('form-2') as HTMLFormElement;
const xisob: HTMLElement = document.querySelector('.collector') as HTMLElement;
const decrement: HTMLElement = document.querySelector('.decrement') as HTMLElement;
const increment: HTMLElement = document.querySelector('.increment') as HTMLElement;
const clear: HTMLElement = document.querySelector('.x') as HTMLElement;
let yeguvchi: number = 0;
let stepNumber: number = 0;
let timeNumber: number = 0;

form2.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  if (!isNaN(Number(inputStep.value))) {
    stepNumber = +inputStep.value;
  } else if (isNaN(Number(inputStep.value))) {
    alert(`Stepga faqat son kiritish mumkin`);
  }
});

increment.addEventListener('click', function () {
  if (check.checked && timeNumber) {
    setTimeout(function () {
      yeguvchi += stepNumber;
      if(check.checked){
        xisob.textContent = yeguvchi.toString()
        
      };
      
    }, timeNumber * 1000);
  } 
    if(check.checked && timeNumber==0){
      alert('mumkinmas')
    }
  else if(!check.checked && timeNumber==0 ){
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
  }  if(check.checked && timeNumber==0){
    alert('mumkinmas')
  }
else if(!check.checked && timeNumber==0 ){
  yeguvchi -= stepNumber;
  xisob.textContent = yeguvchi.toString();
}
});

form1.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  if (check.checked) {
    timeNumber = +inputTime.value;
  }
  if (!check.checked) {
    alert(`time kirg'azishtan oldin checkni belgilab qoyin `);
  }
});

clear.addEventListener('click', function () {
check.checked = false
inputTime.value= ''
});

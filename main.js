"use strict";
let check = document.querySelector('.InCheckbox')
let inputStep = document.querySelector('#step')
let inputTime = document.querySelector('#time')
let form1 = document.getElementById('form-1')
let form2 = document.getElementById('form-2')
let xisob = document.querySelector('.collector')
let decrement = document.querySelector('.decrement')
let increment = document.querySelector('.increment')
let clear = document.querySelector('.x')
let yeguvchi = 0;
let stepNumber = 0;
let timeNumber = 0;

form2.addEventListener('submit', function (e) {
  e.preventDefault()
  if (!isNaN(inputStep.value)) {
    stepNumber = +inputStep.value

  }
  else if (isNaN(inputStep.value)) {
    alert(`Stepga faqat son kiritish mumkin`)
  }
})
increment.addEventListener('click', function () {
 if(check.checked && timeNumber ){

  setTimeout(function () {
    yeguvchi += stepNumber
  

    xisob.textContent = yeguvchi
  
  },timeNumber*1000)
 
 }
 else{
  yeguvchi += stepNumber
  

  xisob.textContent = yeguvchi

 }
})
decrement.addEventListener('click', function () {
  if(check.checked && timeNumber){

    setTimeout(function () {
      yeguvchi -= stepNumber
    
  
      xisob.textContent = yeguvchi
    
    },timeNumber*1000)

   
   }
   else{
    yeguvchi -= stepNumber
    
  
    xisob.textContent = yeguvchi
  
   }

})
form1.addEventListener('submit',function (e) {
  e.preventDefault()
  if(check.checked){
    timeNumber = +inputTime.value
   
  }
  if(!check.checked){
    alert(`time kirg'azishtan oldin checkni belgilab qoyin `)
  }
  
})


clear.addEventListener('click',function () {
   yeguvchi = 0;
 stepNumber = 0;
 timeNumber = 0;
 xisob.textContent = 0
 inputStep.value = ''
 inputTime.value = ''
})

'use strict';

//*** GLOBAL VARIABLES ***

let dogArray = [];


//*** LOCAL STORAGE */
//*** STEP 3: GET DATA OUT OF LOCAL STORAGE */
let retrievedDogData = localStorage.getItem('myDogData');

console.log('retrievedDogData', retrievedDogData);

let parsedDog = JSON.parse(retrievedDogData);

console.log('parsed Dog >>>', parsedDog);

// ***HELPER FUNCTION*** When we have two fixed values:
// num1 is the rer
// num2 is the weight in kilograms
// num3 is a variable we're using for math (may need to be declared globally)

let num1 = parsedDog[0].rer;
let num2 = parsedDog[0].weight;
// let num3 = 0;

function preRer(numA,numB){
  let step2 = 70*(Math.pow(numB, .75));
  let num3 = step2*numA;
  return num3;
}

// let append = document.getElementById('dog-name');
// append.textContent = `${(preRer(num1,num2))} test`;

document.getElementById('dog-name').textContent=`${(preRer(num1,num2))} test`;
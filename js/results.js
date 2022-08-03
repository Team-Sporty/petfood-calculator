'use strict';

//*** LOCAL STORAGE */
//*** STEP 3: GET DATA OUT OF LOCAL STORAGE */
let retrievedDogData = localStorage.getItem('myDogData');

console.log('retrievedDogData', retrievedDogData);

let parsedDog = JSON.parse(retrievedDogData);

console.log('parsed Dog >>>', parsedDog);

let num1 = parsedDog[0].rer;
let num2 = parsedDog[0].weight[parsedDog[0].weight.length-1];
let num4 = parseFloat(parsedDog[0].dogFoodCal);

function calories(numA,numB){
  let step1 = 70*(Math.pow(numB, .75));
  let num3 = step1*numA;
  return num3;
}

// this function found at https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function mass(numD){
  let step1 = (calories(num1,num2))/(numD/1000);
  return step1;
}

document.getElementById('dog-name').textContent=`${capitalizeFirstLetter(parsedDog[0].dogName)} needs ${Math.round((calories(num1,num2)))} calories daily to promote a healthy lifestyle, which is equivalent to ${Math.round(mass(num4))} grams of ${parsedDog[0].dogFoodType}`;

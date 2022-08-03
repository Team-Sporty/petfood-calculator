'use strict';

// must reference HTML where form is for inputs
let newDog = document.getElementsByClassName('input-field');

// where we store our doggy info
let dogArray = [];

// get stuff from local storage if it exists
let retrievedDogData = localStorage.getItem('myDogData');

if (retrievedDogData){
  dogArray = JSON.parse(retrievedDogData);
}

//how to add doggos to array
function Dog(dogName, dogFoodType, dogFoodCal, rer){
  this.dogName = dogName;
  this.weight = [];
  this.date = [];
  this.dogFoodType = dogFoodType;
  this.dogFoodCal = dogFoodCal;
  this.rer = rer;

  dogArray.push(this);
}

// ADD EVENT LISTENER FOR CLICK
newDog[0].addEventListener('submit',
  function (event) {
    event.preventDefault();
    let exists = false;
    let dogIndex;
    let dogName = event.target.dogName.value;
    let weight = parseFloat(event.target.weight.value);
    let date = (event.target.date.value);
    let dogFoodType = (event.target.dogFoodType.value);
    let dogFoodCal = parseFloat(event.target.dogFoodCal.value);
    let rer = parseFloat(event.target.rer.value);

    for(let i=0; i< dogArray.length; i++){
      if(dogArray[i].dogName === dogName){
        exists = true;
        dogIndex = i;
        break;
      }
    }

    if (exists === true){
      dogArray[dogIndex].weight.push(weight);
      dogArray[dogIndex].date.push(date);
      dogArray[dogIndex].dogFoodType = dogFoodType;
      dogArray[dogIndex].dogFoodCal = dogFoodCal;
      dogArray[dogIndex].rer = rer;

    } else {
      let somethingElse = new Dog(dogName, dogFoodType, dogFoodCal, rer);
      somethingElse.weight.push(weight);
      somethingElse.date.push(date);
    }

    // make it into a string (cheese)

    let stringifiedDog = JSON.stringify(dogArray);

    // STORE INPUT TO LOCAL STORAGE

    localStorage.setItem('myDogData', stringifiedDog);
  }
);

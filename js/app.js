'use strict';

// must reference HTML where form is for inputs
let newDog = document.getElementsByClassName('input-field');

// these are variables we'll need eventually
// let rer = 0;
let size = '';

// where we store our doggy info
let dogArray = [];

//how to add doggos to array
function Dog(dogName, weight, date, dogFoodType, dogFoodCal, rer){
  this.dogName = dogName;
  this.weight = weight;
  this.date = date;
  this.dogFoodType = dogFoodType;
  this.dogFoodCal = dogFoodCal;
  this.rer = rer;

  dogArray.push(this);
}

// this below is all cool, but we need it through input fields

// new Dog('patches', 12, 1/2/2022, 'Purina', 485);
// console.log(dogArray);
// console.log(newDog);

// ADD EVENT LISTENER FOR CLICK
newDog[0].addEventListener('submit',
  function (event) {
    event.preventDefault();
    let dogName = event.target.dogName.value;
    let weight = event.target.weight.value;
    let date = parseInt(event.target.date.value);
    let dogFoodType = (event.target.dogFoodType.value);
    let dogFoodCal = parseInt(event.target.dogFoodCal.value);
    let rer = parseInt(event.target.rer.value);
    let newDog = new Dog(dogName, weight, date, dogFoodType, dogFoodCal, rer);
    console.log(newDog);

    let stringifiedDog = JSON.stringify(dogArray);

    // STORE INPUT TO LOCAL STORAGE

    localStorage.setItem('myDogData', stringifiedDog);
  }
);


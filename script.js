// content

let begPic = document.querySelector(".begPic");
let setup = document.querySelector(".setup");
let imageOne = document.querySelector(".setup");
let imageTwo = document.querySelector(".setup");

// button
let optionOne = document.querySelector(".optionOne");
let optionTwo = document.querySelector(".optionTwo");

// first route

optionOne.addEventListener("click", function () {
  setup.innerHTML = "As you both walk out of the palace, suddenly, an assassin pops up behind you, aiming for Duke Colten.";
  optionOne.innerHTML = "Get in the way of the blade.";
  optionTwo.innerHTML = "Let whatever happens happen.";

});

// second route

// content

let begPic = document.querySelector(".begPic");
let setup = document.querySelector(".setup");
let imageOne = document.querySelector(".imageOne");
let imageTwo = document.querySelector(".imageTwo");

// button
let optionOne = document.querySelector(".optionOne");
let optionTwo = document.querySelector(".optionTwo");
let optionOneAA = document.querySelector(".optionOneAA");
let optionTwoAB = document.querySelector(".optionTwoAB");
let optionOneBA = document.querySelector(".optionOneBA");
let optionTwoBB = document.querySelector(".optionTwoBB");
let restart = document.querySelector(".restart");
let bottomMiddle = document.querySelector(".bottomMiddle");


// first route

optionOne.addEventListener("click", function () {
  setup.innerHTML = "As you both walk out of the palace, suddenly, an assassin pops up behind you, aiming for Duke Colten.";

  imageOne.src = "images/beatEmUp.jpg";
  imageTwo.src = "images/watchInHorror.jpg";

  begPic.src ="images/killer.jpg";

  optionOne.style.display = "none";
  optionTwo.style.display = "none";

  optionOneAA.style.display = "block";
  optionTwoAB.style.display = "block";

});

// // route AA

  optionOneAA.addEventListener("dblclick", function () {

  setup.innerHTML = "You jump in the way of the blade, saving Duke Colten’s life. He defeats the assassin and you both live happily ever after…until you find out he’s having an affair with the saintess and planning a coup. He murders you in cold blood so you don’t tell anyone. Yeesh.";
  begPic.src ="images/flDead.png";
  
  restart.style.display = "block";

  imageOne.style.display="none";
  imageTwo.style.display="none";

  optionOneAA.style.display = "none";
  optionTwoAB.style.display = "none";


});

// // route AB

  optionTwoAB.addEventListener("mouseover", function () {
  setup.innerHTML = "The assassin murders Duke Colten. It turns out he’s holding a coup against the monarchy. You go with him to tear down the corrupt system that has plagued this world. You join the revolution and succed in burning down the royals.";
  begPic.src ="images/burningKingdom.jpg";

  restart.style.display = "block";

  imageOne.style.display="none";
  imageTwo.style.display="none";

  optionOneAA.style.display = "none";
  optionTwoAB.style.display = "none";

});


// second route

optionTwo.addEventListener("click", function () {
  setup.innerHTML = "As you both walk out of the palace, suddenly, your rival, Vivian Villaine, pops up out of nowhere and asks for you to meet with her.";

  optionOne.style.display = "none";
  optionTwo.style.display = "none";

  optionOneBA.style.display = "initial";
  optionTwoBB.style.display = "initial";

  imageOne.src = "images/yesGirl.jpg";
  imageTwo.src = "images/runGirl.png";

  begPic.src ="images/villainess.png";

});

// route BA

  optionOneBA.addEventListener("mouseout", function () {
  setup.innerHTML = "Turns out she’s really the disguised cold Duke of the north younger sister, and wants to get married and run away with you. You both get married and run off living happily ever after.";
  begPic.src ="images/loveWinners.jpg";

  restart.style.display = "initial";

  imageOne.style.display = "none";
  imageTwo.style.display = "none";


  optionOneBA.style.display = "none";
  optionTwoBB.style.display = "none";

  

});

// route BB

optionTwoBB.addEventListener("mouseup", function () {
  setup.innerHTML = "You and Prince Anderson live happily ever after…at least until the civil war began. After his brother died, leaving him the throne, Anderson started pulling away more and more, causing you to complain. In order to keep you around he proposes and so you keep your head you accept. Now your getting married, so happily ever after … i guess.";
  begPic.src ="images/sadMarriage.jpg";

  restart.style.display = "initial";

  imageOne.style.display = "none";
  imageTwo.style.display = "none";


  optionOneBA.style.display = "none";
  optionTwoBB.style.display = "none";

});
 
//restart
restart.addEventListener("click", function () {
  setup.innerHTML = "After getting hit by a truck, you get reincarnated as the protagonist of a romance novel. As you get settled into the role, the two male leads suddenly ask you out at breakfast.<br> Which one do you choose?";

  optionOne.style.display = "initial";
  optionTwo.style.display = "initial";
  
  restart.style.display = "none";

  imageOne.style.display = "initial";
  imageTwo.style.display = "initial";

  imageOne.src = "images/dukey.jpg";
  imageTwo.src = "images/prince.jpg";

  begPic.src ="images/fl.png";

});
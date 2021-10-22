"use strict";

//Alle Variablem

const btnSchere = document.querySelector(".schere"); //mein Schere Button
const btnPapier = document.querySelector(".papier"); //mein Papier Button
const btnStein = document.querySelector(".stein"); //mein Stein Button
const btnVergleichen = document.querySelector("button"); //mein "Vergleichen" Button
const btnReset = document.querySelector(".reset"); //mein "Reset" Button
const ComputerHand = document.querySelector(".computer-hand"); //Computer Hand - Rechts
const MeineHand = document.querySelector(".meine-hand"); // Spieler Hand - Links
let PapierNummer = 3; //Zahlzuweisung welche Zahl welche Hand ist
let SteinNummer = 2; //Zahlzuweisung welche Zahl welche Hand ist
let SchereNummer = 1; //Zahlzuweisung welche Zahl welche Hand ist
let userInput; 
const ComputerPoints = document.querySelector(".computer-points"); // Punkte von Computer
const YourPoints = document.querySelector(".your-points");// Punkte von Spieler
const YouWinOrLose = document.querySelector(".win-or-lose"); // Gewonnen, verloren vorschau oberhalb der trennlinie
let CounterYou = 0; // Meine Punkte
let CounterComputer = 0; // Computer Punkte
let Rundenanzahl = 0; // Wieviel runden schon gespielt worden ist
const InputValue2 = document.querySelector('input[name="value2"]:checked').value; // Wieviel Spielrunden ich ausgewählt habne
const btnClose = document.querySelector('.closebutton') // X Button in der Popupbox
const SelectRoundStyle = document.querySelector('.select-rounds') //ist die Popupbox mit Schwarzen hintergrund(Damit ich die klasse ändern auf Display none/block)
const btnPopSpielen = document.querySelector('.spiel-button') //Spiel Button in der Popupbox
const ResultPopup = document.querySelector('.result-popup') // In der Popupbox gibt es noch eine anzeige wer der Gesamtsieger ist


//Schließ Button der Popup box
btnClose.addEventListener('click', function() {
SelectRoundStyle.style.display = 'None';
});


// Ab hier Player Bildzuweisung der Hand
btnSchere.addEventListener("click", function () {
  MeineHand.src = "assets/img/scissors.png";
  userInput = 1;
});

btnStein.addEventListener("click", function () {
  MeineHand.src = "assets/img/rock.png";
  userInput = 2;
});

btnPapier.addEventListener("click", function () {
  MeineHand.src = "assets/img/paper.png";
  userInput = 3;
});

// Vergleichsoperator wer gewonnen hat
btnVergleichen.addEventListener("click", function () {
  const InputValue2 = document.querySelector(
    'input[name="value2"]:checked'
  ).value;

  Rundenanzahl++;
  let random = Math.floor(Math.random() * 3) + 1;
  function SchereSteinPapier() {
    if (random == 1) {
      console.log("Schere = 1");
      ComputerHand.src = "assets/img/scissors.png";
    } else if (random == 2) {
      console.log("Stein = 2");
      ComputerHand.src = "assets/img/rock.png";
    } else {
      console.log("Papier = 3");
      ComputerHand.src = "assets/img/paper.png";
    }
  }
  SchereSteinPapier();

  //Hier wird bestimmt wer gewonnen hat und wo, was stehen soll bei Sieg/Niederlage 
  if (random == userInput) {
    YouWinOrLose.innerHTML = "Unentschieden";
  } else if (userInput == 1 && random == 2) {
    YouWinOrLose.innerHTML = "Du hast verloren!";
    CounterComputer++;
    ComputerPoints.innerHTML = CounterComputer;
  } else if (userInput == 2 && random == 3) {
    YouWinOrLose.innerHTML = "Du hast verloren!";
    CounterComputer++;
    ComputerPoints.innerHTML = CounterComputer;
  } else if (userInput == 3 && random == 1) {
    YouWinOrLose.innerHTML = "Du hast verloren!";
    CounterComputer++;
    ComputerPoints.innerHTML = CounterComputer;
  } else if (random == 1 && userInput == 2) {
    YouWinOrLose.innerHTML = "Du hast gewonnen!";
    CounterYou++;
    YourPoints.innerHTML = CounterYou;
  } else if (random == 2 && userInput == 3) {
    YouWinOrLose.innerHTML = "Du hast gewonnen!";
    CounterYou++;
    YourPoints.innerHTML = CounterYou;
  } else if (random == 3 && userInput == 1) {
    YouWinOrLose.innerHTML = "Du hast gewonnen!";
    CounterYou++;
    YourPoints.innerHTML = CounterYou;
  }

  //Hier wird der Gesamtsieger ermittelt und gibt es im Popup fenster aus
  if (Rundenanzahl == InputValue2 && CounterYou > CounterComputer) {
    SelectRoundStyle.style.display = 'block';
    ResultPopup.innerHTML = "🎉 Du bist der Gesamtsieger 🎉";
  } else if (Rundenanzahl == InputValue2 && CounterYou < CounterComputer) {
    ResultPopup.innerHTML = "😭 Du hast leider verloren 😭";
    SelectRoundStyle.style.display = 'block';
  } else if (Rundenanzahl == InputValue2 && CounterYou < CounterComputer) {
    ResultPopup.innerHTML = "🤝 Unentschieden 🤝";
    SelectRoundStyle.style.display = 'block';
  }
  console.log(Rundenanzahl);
});

/*Ab hier Reset Button*/
btnReset.addEventListener("click", function () {
  CounterYou = 0;
  YourPoints.innerHTML = 0;
  CounterComputer = 0;
  ComputerPoints.innerHTML = 0;
  Rundenanzahl = 0;
  console.log(Rundenanzahl);
  SelectRoundStyle.style.display = 'block';
  ResultPopup.innerHTML = " ";
});


// Ab hier Popup "Spielen" Button
btnPopSpielen.addEventListener('click', function(){
  SelectRoundStyle.style.display = 'None';
  CounterYou = 0;
  YourPoints.innerHTML = 0;
  CounterComputer = 0;
  ComputerPoints.innerHTML = 0;
  Rundenanzahl = 0;
})
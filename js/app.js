'use strict';
var finalCorrectScore = 0

var finalWrongScore = 0

var userName = prompt('Hey there :) what\'s your name? ')
  alert( 'Hey ' + userName + ' my name is Lee, welcome to my about me website')

function Website(){

  var game = prompt('So ' + userName + ' do you want to play a guessing game?');

  if(game.toLowerCase() === 'yes' || game.toLowerCase() === 'y'){
  alert('Cool\! Lets get started.');

  }else if(game.toLowerCase() === 'no' || game.toLowerCase() === 'n'){
  alert('bummer\, well you\'re on my website so you dont have a choice >:(');

  }else{
  alert('please enter yes or no');
  }
}
Website();

function Loveland(){
  var bornWashington = prompt( 'Well ' + userName + ' have I lived in a city called Loveland?')

  if(bornWashington.toLowerCase() === 'yes' || bornWashington.toLowerCase() === 'y'){
    finalCorrectScore++;
    finalWrongScore++;
  alert('Your are correct! good job.')
  }else if(bornWashington.toLowerCase() === 'no' || bornWashington.toLowerCase() === 'n'){
    finalWrongScore++;
  alert('ERRR, nice try but I was!')
  }else {
  alert('say yes or no next time please')
  }
}

Loveland();

function sushi(){
  var food = prompt('Is my favorite food sushi?')

  if(food.toLowerCase() === 'yes' || food.toLowerCase() === 'y'){
    finalWrongScore++;
  alert('ERRR, close! But my favorite food is ramen. Sushi is a close second.');
  }else if(food.toLowerCase() === 'no' || food.toLowerCase() === 'n'){
    finalCorrectScore++;
    finalWrongScore++;
  alert('Correct! My favorite food is ramen.');

  }else{
    alert('ok ' + userName + ',' + ' you gotta answer with a yes or no');
  }
}

sushi();

function flower(){
  var barista = prompt('Have I ever worked at Starbucks as a barista?');

  if(barista.toLowerCase() === 'yes' || barista.toLowerCase() === 'y'){
    finalWrongScore++;
    alert('ERRR, I have not worked as a barista, but my brother did!')
  }else if(barista.toLowerCase() === 'no' || barista.toLowerCase() === 'n'){
    finalCorrectScore++;
    finalWrongScore++;
    alert('Correct! I\'ve never worked as a barista, but I have worked at a flower shop!');
  }else{
    alert('OK ' + userName + ',' + ' ITS TIME TO ANSWER WITH A YES OR A NO');
  }
}

flower();

function Ness(){

  var smash = prompt('Is Super Smash Bro\'s my favorite game?')

  if(smash.toLowerCase() === 'yes' || smash.toLowerCase() === 'y'){
    finalCorrectScore++;
    finalWrongScore++;
    alert('Correct!');
  }else if(smash.toLowerCase() === 'no' || smash.toLowerCase() === 'n'){
    finalWrongScore++;
    alert('ERRR, it is my favorite game :)');
  }else{
    alert('i give up');
  }
}

Ness();

function numGuess(){

  var numAnswer = 13

  var numTries = 1

  for (var i=0; i<4; i++){
    var myNum = prompt('I am thinking of a number between 1-20. You have 4 tries at guessing it. Good Luck!');
    if(Number(myNum) < numAnswer){
      numTries++;
      finalWrongScore++;
      alert('Too low!');
    } else if (parseInt(myNum) > numAnswer){
      numTries++;
      finalWrongScore++;
      alert('Too high!');
    } else if (parseInt(myNum) === numAnswer){
      finalCorrectScore++;
      finalWrongScore++;
      alert('Good Job! You guessed correctly in ' + numTries + ' attempts!');
      break;
    }
    if (i === 3){
      alert('You are out of guesses :( the number was 13');
      break;
    }
  }
}

numGuess();

function Subaru(){
  var carAnswer = ['Volkswagen','Maserati','Subaru','Ford', 'Audi'];

  var carTries = 1

  for(var i=0; i<7; i++){
    var carPing = prompt('Can you guess one of my favorite car manufacturers? You have 6 attempts this time to guess correctly! \(correct spelling is necessary, sorry\)');
    var carCorrect = false
    for(var x=0;x<carAnswer.length;x++){
      if(carAnswer[x].toLowerCase() === carPing.toLowerCase()){
        alert('Correct!');
        finalCorrectScore++;
        finalWrongScore++;
        carCorrect = true;
      }
    }
    if(carCorrect === true){
      break;
    }else{
      finalWrongScore++;
      alert ('sorry try again');
    }
    if(i === 6){
      alert('sorry you are out of guesses :( the answers are Volkswagen, Maserati, Subaru, Ford, or Audi');
      break;
    }
  }
}

Subaru();

alert('Ok ' + userName + ' thats all six questions I have for you! Looks like you got ' + finalCorrectScore + ' correct out of ' + finalWrongScore + ' attempts.')



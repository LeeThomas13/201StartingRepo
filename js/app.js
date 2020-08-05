'use strict';

var userName = prompt('Hey there :) what\'s your name? ')
console.log ('users name is: ' + userName)
alert( 'Hey ' + userName + ' my name is Lee, welcome to my about me website')

var game = prompt('So ' + userName + ' do you want to play a guessing game?');

console.log ('does the user want to play a guessing game: ' + game)

if(game.toLowerCase() === 'yes' || game === 'y'){
alert('Cool\! Lets get started.');

}else if(game.toLowerCase() === 'no' || game === 'n'){
alert('bummer\, well you\'re on my website so you dont have a choice >:(');

}else {
alert('please enter yes or no');

}

var bornWashington = prompt( 'Well ' + userName + ' have I lived in a city called Loveland?')
console.log ('have i lived in Loveland ' + bornWashington )
if(bornWashington.toLowerCase() === 'yes' || bornWashington === 'y'){
alert('Your are correct! good job.')
}else if(bornWashington.toLowerCase() === 'no' || bornWashington === 'n'){
alert('ERRR, nice try but I was!')
}else {
alert('say yes or no next time please')
}

var food = prompt('Is my favorite food sushi?')
console.log('is my favorite food pizza: ' + food)

if(food.toLowerCase() === 'yes' || food === 'y'){
alert('ERRR, close! But my favorite food is ramen. Sushi is a close second.');
}else if(food.toLowerCase() === 'no' || food === 'n'){
alert('Correct! My favorite food is ramen.');
}else{
  alert('ok ' + userName + ',' + ' you gotta answer with a yes or no');
}

var barista = prompt('Have I ever worked at Starbucks as a barista?');
console.log('have i worked as a barista: ' + barista)

if(barista.toLowerCase() === 'yes' || barista === 'y'){
  alert('ERRR, I have not worked as a barista, but my brother did!')
}else if(barista.toLowerCase() === 'no' || barista === 'n'){
  alert('Correct! I\'ve never worked as a barista, but I have worked at a flower shop!');
}else{
  alert('OK ' + userName + ',' + ' ITS TIME TO ANSWER WITH A YES OR A NO');
}

var smash = prompt('Is Super Smash Bro\'s my favorite game?')
console.log('is ssb my fav game: ' + smash);

if(smash.toLowerCase() === 'yes' || smash === 'y'){
  alert('Correct! I used to compete at locals with Ness');
}else if(smash.toLowerCase() === 'no' || smash === 'n'){
  alert('ERRR, it is my favorite game :)');
}else{
  alert('i give up');
}

alert('Ok ' + userName + ' thats all the questions I have for you!')

// var numArray = ['1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9' + '10' + '11' + '12' + '13' + '14' + '15' + '16' + '17' + '18' + '19' + '20']

// var guessNum = prompt ('Ok ' + userName + ' guess a number between 1-20, you have 4 attempts')

// while(guessNum < 12){
//   alert('too low! you have 3 attempts left.');
// }

// while(guessNum > 12){
//   alert('too high! you have 3 attempts left.');
// }

// while(guessNum === 12){
//   alert('correct!');
}





'use strict';

var userName = prompt('Hey there :) what\'s your name? ')
console.log ('users name is: ' + userName)
alert( 'Hey ' + userName + ' my name is Lee, welcome to my about me website')

var food = prompt('So ' + userName + ' do you like ramen?');

console.log ('does the user like ramen: ' + food)

if(food.toLowerCase() === 'yes' || food === 'y'){
alert('Cool\! Ramen is my favorite food.');

}else if(food.toLowerCase() === 'no' || food === 'n'){
alert('bummer\, Ramen is my favorite food.');

}else {
alert('please enter yes or no');

}

var snowboardPreference = prompt( 'Well ' + userName + ' do you like to snowboard?')
console.log ('does the user like to snowboard? ' + snowboardPreference)

if(snowboardPreference.toLowerCase() === 'yes' || snowboardPreference === 'y'){
alert('Wow! snowboarding is my favorite outdoors activity!')
}else if(snowboardPreference.toLowerCase() === 'no' || snowboardPreference === 'n'){
alert('Aww its so fun though :\(')
}else {
alert('say yes or no next time please')
}

var state = prompt('Do you live in Washington ' + userName + '?')
console.log('does the user live in washington: ' + state)

if(state.toLowerCase() === 'yes' || state === 'y'){
alert('Very cool ' + userName + '!' + ' I plan on moving there as soon as covid calms down.');
}else if(state.toLowerCase() === 'no' || state === 'n'){
alert('oh ok, either way I plan on moving there once covid calms down.');
}else{
  alert('ok ' + userName + ',' + ' you gotta answer with a yes or no');
}

var height = prompt('so ' + userName + ' are you over 6 feet tall?');
console.log('is the user over six feet tall: ' + height)

if(height.toLowerCase() === 'yes' || height === 'y'){
  alert('hey me too!')
}else if(height.toLowerCase() === 'no' || height === 'n'){
  alert('you\'re lucky, the lower back problems are real');
}else{
  alert('OK ' + userName + ',' + ' ITS TIME TO ANSWER WITH A YES OR A NO');
}

var smash = prompt('Ok ' + userName + ',' + ' last question, have you ever played Super Smash Bros?')
console.log('has the user ever played ssb: ' + smash);

if(smash.toLowerCase() === 'yes' || smash === 'y'){
  alert('Thats so cool! You cant beat my ness though :)');
}else if(smash.toLowerCase() === 'no' || smash === 'n'){
  alert('You have to try it! It\'s my favorite game of all time!');
}else{
  alert('i give up');
}

alert('Well thats it for the interrogation, here\'s a little website about me')



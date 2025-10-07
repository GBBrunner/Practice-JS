// In Class Exercise 1: Helper Functions
import {multiply, divide, welcomeMessage} from './helperFunctions.js';
// In-Class Exercise 2: Math Functions
import {circleArea, password, calcTax} from './mathFunctions.js';
// In-Class Exercise 3: Movie Ticket Eligibility
import {checkDiscount} from './checkDiscount.js';
// In-Class Exerise 4: FizzBuzz Challenge
import { fizzBuzz } from './fizzbuzz.js';
// In-class Exercise 5: Pokémon API
import {pokedex} from './pokémonAPI.js';
// In-Class Exercise 6: Music Player Controls
import {play, stop, next, previous, musicList} from './music_player_controls.js';
// In-Class Exercise 7: Searching Algorithms
import {linearSearch, binarySearch, jumpSearch, strArr} from './searchingAlgorithms.js';

// Exercise 5: Pokemon API imported from pokémonAPI.js
pokedex();
// Exercise 6: Music Player Controls imported from musicPlayer.js
// import {play, stop, next, previous} from './musicPlayer.js';
// Buttons in HTML call these functions



// Exercise 1: Helper Functions, imported from helperFunctions.js
document.getElementById('multiply-button').addEventListener('click', () => {
	const a = document.getElementById('inputValueA').value;
	const b = document.getElementById('inputValueB').value;
	alert(`${a} x ${b} = ${multiply(a,b)}`);
});
document.getElementById('divide-button').addEventListener('click', () => {
	const a = document.getElementById('inputValueA').value;
	const b = document.getElementById('inputValueB').value;
	alert(`${a} / ${b} = ${divide(a,b)}`);
});
document.getElementById('welcomeMessage').addEventListener('click', () => {
	alert(welcomeMessage());
});
// Exercise 2: Math Functions, imported from mathFunctions.js
document.getElementById('calculate-circle-area-button').addEventListener('click', () => {
	const r = document.getElementById('inputRadius').value;
	const area = circleArea(r);
	alert(`The Area is: ${area}`);
});
document.getElementById('generate-password-button').addEventListener('click', () => {
	alert(`Your new generated password is: ${password()}`);
});
document.getElementById('calculate-tax-button').addEventListener('click', () => {
	alert(`The total cost with tax is: $${calcTax()}. Check JS for items and prices`);
});
// Exercise 3: Movie Ticket Eligibility, imported from movieTicket.js
document.getElementById('checkDiscount-button').addEventListener('click', () => {
	alert(checkDiscount());
});
// Exercise 4: FizzBuzz, imported from fizzBuzz.js
document.getElementById('fizzBuzz-button').addEventListener('click', () => {
	const n = document.getElementById('fizzBuzzInput').value;
	const res = fizzBuzz(n);
	alert(res.message);
});

// Exercise 6: Music Player Controls, imported from musicPlayer.js
document.getElementById('next-button').addEventListener('click', next);
// Play/stop toggle handled in music_player_controls.js
document.getElementById('prev-button').addEventListener('click', previous);

// Exercise 7: Searching Algorithms, imported from searchingAlgorithms.js
// Wire up buttons to read the input, run the respective search, and alert results.
document.getElementById('linearSearchButton').addEventListener('click', () => {
	const value = document.getElementById('linearSearchInput').value.trim();
	if (!value) { alert('Please enter a value to search.'); return; }
	const currentIndex = linearSearch(strArr, value.toLowerCase());
	if (currentIndex !== -1) alert(`${value} found at index ${currentIndex}`);
	else alert(`${value} not found. Please check your spelling and try again.`);
});

document.getElementById('binarySearchButton').addEventListener('click', () => {
	const value = document.getElementById('binarySearchInput').value.trim();
	if (!value) { alert('Please enter a value to search.'); return; }
	const currentIndex = binarySearch(strArr, value);
	if (currentIndex !== -1) alert(`${value} found at index ${currentIndex}`);
	else alert(`${value} not found. Please check your spelling and try again.`);
});

document.getElementById('jumpSearchButton').addEventListener('click', () => {
	const value = document.getElementById('jumpSearchInput').value.trim();
	if (!value) { alert('Please enter a value to search.'); return; }
	const currentIndex = jumpSearch(strArr, value);
	if (currentIndex !== -1) alert(`${value} found at index ${currentIndex}`);
	else alert(`${value} not found. Please check your spelling and try again.`);
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nineOclock = document.getElementById("hour-9");
var tenOclock = document.getElementById("hour-10");
var elevenOclock = document.getElementById("hour-11");
var twelveOclock = document.getElementById("hour-12");
var oneOclock = document.getElementById("hour-1");
var twoOclock = document.getElementById("hour-2");
var threeOclock = document.getElementById("hour-3");
var fourOclock = document.getElementById("hour-4");
var Oclock = document.getElementById("hour-5");

var nineOclockStorage = localStorage.getItem("hour-9");
var tenOclockStorage = localStorage.getItem("hour-10");
var elevenOclockStorage = localStorage.getItem("hour-11");
var twelveOclockStorage = localStorage.getItem("hour-12");
var oneOclockStorage = localStorage.getItem("hour-1");
var twoOclockStorage = localStorage.getItem("hour-2");
var threeOclockStorage = localStorage.getItem("hour-3");
var fourOclockStorage = localStorage.getItem("hour-4");
var OclockStorage = localStorage.getItem("hour-5");

var currentDateElement = document.getElementById("currentDay");
var currentDate = dayjs();
currentDateElement.textContent = currentDate.format("dddd MMMM D, YYYY");

var saveBtn = document.getElementsByClassName("save-button").addEventListener("click", function(event) {
event.preventDefault();
})

$(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
});

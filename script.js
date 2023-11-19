// selects values of time blocks
var nineOclock = document.getElementById("hour-9");
var tenOclock = document.getElementById("hour-10");
var elevenOclock = document.getElementById("hour-11");
var twelveOclock = document.getElementById("hour-12");
var oneOclock = document.getElementById("hour-1");
var twoOclock = document.getElementById("hour-2");
var threeOclock = document.getElementById("hour-3");
var fourOclock = document.getElementById("hour-4");
var Oclock = document.getElementById("hour-5");

// gets current date

var currentDateElement = document.getElementById("currentDay");
var currentDate = dayjs();
currentDateElement.textContent = currentDate.format("dddd MMMM D, YYYY");

// saves data even after refreshed

$(".time-block").each(function() {
    var timeBlock = $(this).attr("id");

    var storedValue = localStorage.getItem(timeBlock);
    if (storedValue !== null) {
        $(this).find(".description").val(storedValue);
    }
  })

// prevents page from auto refreshing when clicked
  $(".saveBtn").on("click", function (event) {
  event.preventDefault();

  // selects values 

  var textValues = $(this).siblings(".description").val();
  var timeBlock = $(this).parent().attr("id");

  // save user input in local storage
  localStorage.setItem(timeBlock, textValues);
});

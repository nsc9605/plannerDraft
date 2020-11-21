
// Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const hourTask = $("id");
const userText = $(".hour-task");

// Set current time in header when application is opened
$(document).ready(function () {
  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

  var hours = today.hours();
  console.log(hours);
});

// Set variables for time/parent/current hour to refer to when change
// color throughout the day.
var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));

// set variable for current hour for color coding purposes
let index = 0;

console.log(timeBlock);

// Function to argue past/present/future time and what to log and when.
timeBlock.each(function () {

    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));
    console.log(timeId);

    if (timeId < currentHour) {
      $(this).addClass("past");

    } else if (timeId === currentHour) {
        $(this).removeClass("past");
      $(this).addClass("present");
      
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
    $(this).addClass("future");

    $(this).val(localStorage.getItem(parent.attr("id")));
  }
  $(this).val(localStorage.getItem(parent.attr("id")));
  // console.log($(this).val());localStorage.getItem(parent.attr("id"));
})

// Set .on("click") function and tell when/where to store information
$(".saveBtn").on("click", function() {
 
  var userText = $(this).siblings(".time-block").val();
  // console.log(userText);
  
  var hourTask = $(this).parents(".row").attr("id");
  //is this value correct?
  // console.log(hourTask)

// Send to localStorage
localStorage.setItem(hourTask, userText);

console.log(localStorage.getItem(hourTask, userText))
})

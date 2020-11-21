// Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const description = $(".description");
const hourTask = $("id");
const userText = $(".hour-task-text");


// Set current time in header when application is opened
$(document).ready(function () {
  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

  var hours = today.hours();
  console.log(hours);
});

var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));

// set variable for current hour for color coding purposes
let index = 0;

console.log(timeBlock);

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
})




function saveBtn() {
  console.log($(this));


$(".saveBtn").on("click", function() {
    $(".save").on("click", saveBtn)
    // the save button we are clicking on
    //  console.log($(this))
   
    var userText = $(this).siblings(".time-block").val();
    console.log(userText);

    // if(!localStorage.getItem(userText)) {
    //    localStorage.setItem(userText, JSON.stringify(userText));
    // }
    // use jQuery to find this is hour
    var hourTask = $(this).parents(".row").attr("id");
    //is this value correct?
    console.log(hourTask)

    
// Send to localStorage
localStorage.setItem(timeId);
localStorage.setItem(hourTask, userText);

})
}
// function hourTask(text) {

// }
// function saveBtn(event) {
//     console.log(event.target);
//     localStorage.setItem("text", text);
// }
// renderLastRegistered to keep information
// function renderTasks ()



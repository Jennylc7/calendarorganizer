//Create a simple calendar application that allows a user to save events for each hour of the day 
//by modifying starter code. This app will run in the browser and feature dynamically updated HTML 
//and CSS powered by jQuery.

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//Button
$(document).ready(function () {
//WHEN I click into a time block
  $("button").click(function () {
    //  $(this).hide();
    alert("The button was clicked")
    //save button
    //var user input
    $(this).sibling(".schedule").val().trim() --> 
    //".schedule" save it in a variable
    //var timeRow = 
    $(this).parent().att("data-hour") --> 
    //tells you which time block you're on 
    window.localStorage.setItem(timeRow, todoInput);
  });
  
  
//make one of these for each time
  $("#7 .schedule").val(localStorage.getItem(""))
  $("#8 .schedule").val(localStorage.getItem(""))
  $("#9 .schedule").val(localStorage.getItem(""))
  $("#10 .schedule").val(localStorage.getItem(""))
  $("#11 .schedule").val(localStorage.getItem(""))
  $("#9 .schedule").val(localStorage.getItem(""))
});
//THEN I can enter an event


// I need an event listener




//I WANT to add important events to a daily planner


//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist




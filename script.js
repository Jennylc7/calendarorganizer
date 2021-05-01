//Create a simple calendar application that allows a user to save events for each hour of the day 
//by modifying starter code. This app will run in the browser and feature dynamically updated HTML 
//and CSS powered by jQuery.

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//Button

//the document is "ready" for the code inside to run
$(document).ready(function () {
//WHEN I click into a time block

//execute the javascript
  $("button").click(function () {
    //  $(this).hide();
    alert("Save your note")
    //save button
    //var user input

    // Return all sibling elements of each <li> element with class name
   var value =  $(this).sibling(".schedule").val().trim();

   //The parent() method returns the direct parent element of the selected element.
   var time = $(this).parent().attr("id");

     // save in localStorage
    //  localStorage.setItem(time, value);
    // });

    //".schedule" save it in a variable
    //var timeRow = 

    var time = $(this).parent().att("data-hour") --> 
    //tells you which time block you're on 
    window.localStorage.setItem(timeRow, todoInput);
  });
  
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();







//make one of these for each time
  $("#7 .schedule").val(localStorage.getItem(""))
  $("#8 .schedule").val(localStorage.getItem(""))
  $("#9 .schedule").val(localStorage.getItem(""))
  $("#10 .schedule").val(localStorage.getItem(""))
  $("#11 .schedule").val(localStorage.getItem(""))
  $("#12 .schedule").val(localStorage.getItem(""))
  $("#13 .schedule").val(localStorage.getItem(""))
  $("#14 .schedule").val(localStorage.getItem(""))
  $("#15 .schedule").val(localStorage.getItem(""))
  $("#16 .schedule").val(localStorage.getItem(""))
  $("#17 .schedule").val(localStorage.getItem(""))
  $("#18 .schedule").val(localStorage.getItem(""))
  $("#19 .schedule").val(localStorage.getItem(""))

 // display current day on page
 $("#currentDay").text(moment().format("dddd, MMMM Do"));
});








//THEN I can enter an event


// I need an event listener




//I WANT to add important events to a daily planner


//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist




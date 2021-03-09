/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/

var containerDiv = $("#main-container")

// declare variable for moment js. and write it to #currentDay
// use set interval method to dynamically update time every second
setInterval(function () {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("h:mm:ss a MMM Do, YYYY"));
}, 1000);



/*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours*/
// create an array with the times
function renderBlocks() {
    var timeList = $("<ul>");
    var times = [
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
    ]
    // for loop that cycles through the times and creates and attaches an element
    for (var i = 0; i < times.length; i++) {
        var hourBlock = $("<li>");
        var eventText = $("<input>")
        var saveBtn = $("<button>")
        // classes for <ul>/<li> are from bootstrap; experiment with bootstrap for other elements
        timeList.addClass("list-group");
        containerDiv.append(timeList);
        // may need to add a class to style hourBlock.text once we style the other elements
        // figure out how to get this value and pass it into logic on line 64+
        // 
        var timeDisplay = hourBlock.text(times[i] > 12 ? `${times[i] - 12}:00` : `${times[i]}:00`);
        hourBlock.attr("class", "time-block");
        hourBlock.addClass("list-group-item");
        timeList.append(hourBlock);
        // WHEN I click into a timeblock, THEN I can enter an event
        eventText.attr("type", "text");
        eventText.attr("class", "textarea");
        eventText.attr("name", "textarea");
        eventText.attr("id", times[i] - 8);
        // add something here to uniquely identify this one
        hourBlock.append(eventText);
        saveBtn.attr("id",times[i] - 8 + "btn");
        saveBtn.attr("class", "saveBtn");
        saveBtn.text("Save");
        hourBlock.append(saveBtn);
        var timeCheck = moment().hours();
        /*WHEN I view the timeblocks for that day
        THEN each timeblock is color coded to indicate whether it is in the past, present, or future*/
        // set class attributes with conditional statements
        // use timeCheck variable to compare value in times[i]

        if (timeCheck > (times[i])) {
            hourBlock.attr("class", "past");
        }

        if (timeCheck < (times[i])) {
            hourBlock.attr("class", "future");
        }

        if (timeCheck === (times[i])) {
            hourBlock.attr("class", "present");
        }    
    }
var txt1 = $("#1");
var txt2 = $("#2");
var txt3 = $("#3");
var txt4 = $("#4");
var txt5 = $("#5");
var txt6 = $("#6");
var txt7 = $("#7");
var txt8 = $("#8");
var txt9 = $("#9");
var btn1 = $("#1btn");
var btn2 = $("#2btn"); 
var btn3 = $("#3btn");
var btn4 = $("#4btn");
var btn5 = $("#5btn");
var btn6 = $("#6btn");
var btn7 = $("#7btn");
var btn8 = $("#8btn");
var btn9 = $("#9btn");

btn1.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt1.val());
});
btn2.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt2.val());
});
btn3.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt3.val());
});
btn4.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt4.val());
});
btn5.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt5.val());
});
btn6.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt6.val());
});
btn7.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt7.val());
});
btn8.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt8.val());
});
btn9.on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("event", txt9.val());
});
} 
renderBlocks();

   
    

    // Prevent the default behavior
    
    // get the text area that is associated with with this save button
    // get the value in it
    // do the save








/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/
// we need an event listener for saveBtn
// review using target.event to grab the user input from eventText, there is probably a jQuery shortcut
// We are going to pass a that into a function to send the user input text to local storage


/*WHEN I refresh the page
THEN the saved events persist*/
// use the get local storage method to place the text content
// probably need to use JSON stringify
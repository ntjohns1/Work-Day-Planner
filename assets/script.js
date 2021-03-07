/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/

var containerDiv = $('#main-container')
// declare variable for moment js. and write it to #currentDay
// use set interval method to dynamically update time every second
setInterval(function () {
  var currentTime = moment();
  $("#currentDay").text(currentTime.format("h:mm:ss MMM Do, YYYY"));
}, 1000);



/*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours*/
// create an array with the times
function renderBlocks(){
var times = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
]
// for loop that cycles through the times and creates and attaches an element
for (var i = 0; i < times.length; i++) {
var timeList = $('<ul>');
var hourBlock = $('<li>');
var eventText = $('<textarea>')
var saveBtn = $('<button>')
// classes for <ul>/<li> are from bootstrap; experiment with bootstrap for other elements
timeList.addClass("list-group");
containerDiv.append(timeList);
// may need to add a class to style hourBlock.text
hourBlock.text(times[i]);
hourBlock.addClass("list-group-item");
// hourBlock.attribute("class",)
// ToDo assign styles to text areas and save buttons
timeList.append(hourBlock);
hourBlock.append(eventText);
saveBtn.text("Save")
hourBlock.append(saveBtn);

}
}
renderBlocks(); 



// these elements need a text area and a button element on the right when we send to local storage.
// 

/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future*/
// create variables for the given classes
// a series of conditionals will pass the designated classes to them based on the time. Maybe use math.floor to round to the hour?
// 

/*WHEN I click into a timeblock
THEN I can enter an event*/
// possibly create an event listener for the whole div so that user can click anywhere
// make sure there is a text area, possibly a hidden form element inside the spans we create

/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/
// we need an event listener for the button on the right of the hour blocks
// review target.event we are going to pass a that into a function to send the text area content to local storage


/*WHEN I refresh the page
THEN the saved events persist*/
// use the get local storage method to place the text content
// probably need to use JSON stringify
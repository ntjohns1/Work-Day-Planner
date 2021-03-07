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
        var eventText = $("<textarea>")
        var saveBtn = $("<button>")
        // classes for <ul>/<li> are from bootstrap; experiment with bootstrap for other elements
        timeList.addClass("list-group");
        containerDiv.append(timeList);
        // may need to add a class to style hourBlock.text once we style the other elements
        // figure out how to get this value and pass it into logic on line 64+
        var timeDisplay = hourBlock.text(times[i] > 12 ? `${times[i] - 12}:00` : `${times[i]}:00`);
        hourBlock.attr("class", "time-block")
        hourBlock.addClass("list-group-item");
        // hourBlock.attribute("class",)
        // ToDo assign styles to text areas and save buttons
        timeList.append(hourBlock);
        eventText.attr("class", "textarea")
        hourBlock.append(eventText);
        saveBtn.attr("class", "saveBtn");
        saveBtn.text("Save");
        hourBlock.append(saveBtn);
        var timeCheck = moment().hours();
        
        console.log(timeCheck);
        console.log((times[i]));
        
        if (timeCheck > (times[i])) {
            hourBlock.attr("class", "past");
        }

        if (timeCheck < (times[i])) {
            hourBlock.attr("class", "future");
        }

        if (timeCheck === (times[i])) {
            hourBlock.attr("class", "present");
        }

            

            /*WHEN I view the timeblocks for that day
            THEN each timeblock is color coded to indicate whether it is in the past, present, or future*/
            // set attributes with conditional statements
            // use timeCheck variable to compare value in lineTitle variable, can we use .isBefore, .isAfter, etc.?


    }
}
renderBlocks();





// if timeCheck is > time listed in hourBlock, attr("class", "past")
// if timeCheck is < time listed in hourBlock, attr("class", "future")
// if timeCheck is === then attr("class", "present")

/*WHEN I click into a timeblock
THEN I can enter an event*/
// possibly create an event listener for the whole div so that user can click anywhere



/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/
// we need an event listener for saveBtn
// review using target.event to grab the user input from eventText, there is probably a jQuery shortcut
// We are going to pass a that into a function to send the user input text to local storage


/*WHEN I refresh the page
THEN the saved events persist*/
// use the get local storage method to place the text content
// probably need to use JSON stringify
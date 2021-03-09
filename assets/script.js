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
        var eventText = $("<textarea>");
        var saveBtn = $("<button>");
        containerDiv.append(timeList);
        hourBlock.text(times[i] > 12 ? `${times[i] - 12}:00` : `${times[i]}:00`);
        hourBlock.attr("class", "time-block",);
        hourBlock.addClass("list-group-item");
        timeList.append(hourBlock);
        // WHEN I click into a timeblock, THEN I can enter an event
        eventText.attr("type", "text");
        eventText.attr("class", "textarea");
        eventText.attr("name", "textarea");
        eventText.attr("id", times[i] - 8);
        // add something here to uniquely identify this one
        hourBlock.append(eventText);
        saveBtn.attr("id", times[i] - 8 + "btn");
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
    /*WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage*/
    // select the button and input elements we just created by id
    var txt1 = $("#1");
    var txt2 = $("#2");
    var txt3 = $("#3");
    var txt4 = $("#4");
    var txt5 = $("#5");
    var txt6 = $("#6");
    var txt7 = $("#7");
    var txt8 = $("#8");
    var txt9 = $("#9");
    var txt10 = $("#10");
    var txt11 = $("#11")
    var btn1 = $("#1btn");
    var btn2 = $("#2btn");
    var btn3 = $("#3btn");
    var btn4 = $("#4btn");
    var btn5 = $("#5btn");
    var btn6 = $("#6btn");
    var btn7 = $("#7btn");
    var btn8 = $("#8btn");
    var btn9 = $("#9btn");
    var btn10 = $("#10btn");
    var btn11 = $("#11btn");
    btn1.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("9:00", txt1.val());
    });
    btn2.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("10:00", txt2.val());
    });
    btn3.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("11:00", txt3.val());
    });
    btn4.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("12:00", txt4.val());
    });
    btn5.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("1:00", txt5.val());
    });
    btn6.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("2:00", txt6.val());
    });
    btn7.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("3:00", txt7.val());
    });
    btn8.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("4:00", txt8.val());
    });
    btn9.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("5:00", txt9.val());
    });
    btn10.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("6:00", txt10.val());
    });
    btn11.on('click', function (event) {
        event.preventDefault();
        localStorage.setItem("7:00", txt11.val());
    });
    /*WHEN I refresh the page
    THEN the saved events persist*/
    var saveTxt1 = localStorage.getItem("9:00");
    var saveTxt2 = localStorage.getItem("10:00");
    var saveTxt3 = localStorage.getItem("11:00");
    var saveTxt4 = localStorage.getItem("12:00");
    var saveTxt5 = localStorage.getItem("1:00");
    var saveTxt6 = localStorage.getItem("2:00");
    var saveTxt7 = localStorage.getItem("3:00");
    var saveTxt8 = localStorage.getItem("4:00");
    var saveTxt9 = localStorage.getItem("5:00");
    var saveTxt10 = localStorage.getItem("6:00");
    var saveTxt11 = localStorage.getItem("7:00");
    txt1.text(saveTxt1);
    txt2.text(saveTxt2);
    txt3.text(saveTxt3);
    txt4.text(saveTxt4);
    txt5.text(saveTxt5);
    txt6.text(saveTxt6);
    txt7.text(saveTxt7);
    txt8.text(saveTxt8);
    txt9.text(saveTxt9);
    txt10.text(saveTxt10);
    txt11.text(saveTxt11);
}
renderBlocks();


















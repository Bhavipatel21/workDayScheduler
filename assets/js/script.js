/*

 create a daily planner to create a schedule
    open the planner
    the current day is displayed at the top of the calendar
    scroll down
       presented with time blocks for standard business hours
            view the time blocks for that day
    each time block is color-coded to indicate whether it is in the past, present, or future
    click into a time block
    enter an event
    click the save button for that time block
    the text for that event is saved in local storage
    refresh the page
    the saved events persist */
//set daily calander work hours and sethour to compare currenthours

var myHours = [
    {
        workhour: "9am",
        sethour: 9,
    },
    {
        workhour: "10am",
        sethour: 10,
    },
    {
        workhour: "11am",
        sethour: 11,
    },
    {
        workhour: "12pm",
        sethour: 12,
    },
    {
        workhour: "1pm",
        sethour: 13,
    },
    {
        workhour: "2pm",
        sethour: 14,
    },
    {
        workhour: "3pm",
        sethour: 15,
    },
    {
        workhour: "4pm",
        sethour: 16,
    },
    {
        workhour: "5pm",
        sethour: 17,
    },
];

//display current day date
var currentDay = $("#current-day");
console.log("currentday", currentDay)

var todaysDate = dayjs().$d;
console.log("todays date", todaysDate);

currentDay.text(todaysDate);


var currentHour = dayjs().$H;
var pastHour = dayjs().subtract(1, "h").$H;
var timeBlock = $("#time-block");

var hourText = myHours.workhour;
var setHourId = myHours.sethour;

//load the page on document.ready function
$(document).ready(function () {
    
    //create foreach method for creating rows,columns,buttons and color-code timeblock

    myHours.forEach(function (myHours) {
       
        var hourText = myHours.workhour;
        var setHourId = myHours.sethour;
       
        //create row and columns
        var row = $("<section>").addClass("row");
        timeBlock.append(row);
        var span = $("<span>" + hourText + "</span>");
        span.attr("class", "hour col-1");
        row.append(span);

        var input = $("<input>");
        input.attr("class", "col-10");
        input.attr("id", setHourId);
        row.append(input);

        //each time block is color-coded to indicate whether it is in the past, present, or future
        if (currentHour > setHourId) {
            input.addClass("past");
            input.prop("disabled", true)
        } else if (currentHour < setHourId) {
            input.addClass("future");
        } else if (currentHour === setHourId) {
            input.addClass("present");
        }

        //savebtn
        var button = $("<button>").addClass("saveBtn col-1");
        row.append(button);
        //font-awesome image
        var btnimg = $("<i>").addClass("fas fa-save fa-2x");
        button.append(btnimg);

        var key  = setHourId
        //console.log(key)
        var value = localStorage.getItem(key)
        input.val(value)
                
        row.on('click', 'button', function(event) {
            event.preventDefault();
            //console.log(event);

            //var key = setHourId
            var value = input.val();
            localStorage.setItem(key, value);
        
           
          });

    });

   
});

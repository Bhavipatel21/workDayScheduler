//display current day date using dayjs() 
var currentDay = $("#currentday");
var now = dayjs();
var todaysDate = (now.format("dddd, MMMM D YYYY"));
currentDay.text(todaysDate);

//get current hour 
var currentHour = dayjs().$H;

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

//select timeblock id to add rows and columns
var timeBlock = $("#time-block");

//load the page on document.ready function
$(document).ready(function () {
    
    //create foreach method for creating rows,columns,buttons and color-code timeblock
    myHours.forEach(function (myHours) {

        var hourText = myHours.workhour;
        var setHourId = myHours.sethour;

        //create row
        var row = $("<section>").addClass("row");
        timeBlock.append(row);
        
        var span = $("<span>" + hourText + "</span>").addClass("hour col-1");
        row.append(span);

        //add column for event input text
        var input = $("<input>").addClass("col-10");
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

        //add column for - savebtn
        var button = $("<button>").addClass("saveBtn col-1");
        row.append(button);

        //add font-awesome image to button
        var btnImg = $("<i>").addClass("fas fa-save fa-2x");
        button.append(btnImg);
        

        //the text for that event is saved in local storage
        var key  = setHourId
        var value = localStorage.getItem(key)
        input.val(value)
        
        row.on('click', 'button', function(event) {
        event.preventDefault();
        var value = input.val();
        localStorage.setItem(key, value);
        

});

    });


});

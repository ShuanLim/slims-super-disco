// variable to display today's date/time via momentJS declaration
var todayDate = moment().format('dddd, MMM Do YYYY');
// display time on page
$("#currentDay").html(todayDate);
// jQuery shorthand for document.ready method
$(function () {
    // click event listener for saveBtn
    $(".saveBtn").on("click", function () {
        // get values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save text/description within local storage
        localStorage.setItem(time, text);
    })
       function timeKeeper() {
        // current time in hours
        var timeNow = moment().hour();
        // loop time blocks 
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // check time and add classes for background indicators
            if (blockTime < timeNow) {
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // retrieve items from local storage 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    // run timeKeeper()
    timeKeeper();
});

// variable to display today's date/time via momentJS declaration
var todayDate = moment().format('dddd, MMM Do YYYY');
// display time on page
$("#currentDay").html(todayDate);
// jQuery shorthand for document.ready method
$(function () {
    // click event listener for saveBtn
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
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
            // To check the time and add the classes for background indicators
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
    
    timeKeeper();
});

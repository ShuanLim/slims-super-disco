// variable for today's date/time via momentJS declaration
var getTime = moment().format('MMMM Do YYYY');

// display time on page
$("#currentDay").html(getTime);
//click event for save btn 
$('.saveBtn').on('click', function() {
    const parent = $(this).parent().attr('id')
    console.log(parent)
})
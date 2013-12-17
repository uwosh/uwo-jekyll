// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

//$(document).ready(function() {
//  $('.clickable').click(function() {
//    $('i.clickable').toggleClass('rotate180');
//  });
//});

$.getJSON("http://feeds.uwosh.edu/api/v1/index.php/combined", function(data) {
    // Now use this data to update your view models,
    // and Knockout will update your UI automatically
    console.log(data);
});

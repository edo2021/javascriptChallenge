// from data.js
var tableData = data;

// YOUR CODE HERE!
// assigning the data to a variable and selecting the button
var ufoData = data;


var button = d3.select("#filter-btn");

// assign the data from data.js to a variable
var ufoData = data;

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("#form");



// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

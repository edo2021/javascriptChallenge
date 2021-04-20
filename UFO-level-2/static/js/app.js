// from data.js
var tableData = data;


// select the filters 
d3.selectAll(".filter").on("change", runEnter);

// event handler 
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element 
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var inputCity = d3. select("#city");

    var cityValue = inputCity.property("value");

    var inputState = d3. select("#state");

    var stateValue = inputState.property("value");

    var inputCountry = d3. select("#country");

    var countryValue = inputCountry.property("value");

    var inputShape = d3. select("#shape");

    var shapeValue = inputShape.property("value");


    // assign data to the variable filtereddata
    var filteredData = ufoData;

    // filter the data by each value if the input matches a value in the table
    if (inputValue) {

        filteredData = filteredData.filter(u => u.datetime === inputValue);
    }
    if (cityValue) {

        filteredData = filteredData.filter(u => u.city === cityValue);

    }
    if (stateValue) {

        filteredData = filteredData.filter(u => u.state === stateValue);

    }
    if (countryValue) {

        filteredData = filteredData.filter(u => u.country === countryValue);

    }
    if (shapeValue) {

        filteredData = filteredData.filter(u => u.shape === shapeValue);

    }

    // select the table body
    var tbody = d3.select("tbody");

    // clear the table after each change
    tbody.html("");

    // append the data to the table
    // create a for loop that goes through each dictionary to find the key and value and then append the value for each key
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

};
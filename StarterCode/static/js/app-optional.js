// from data.js
var tableData = data;
//code to render all the data for the table from data.js
var tbody = d3.select("tbody");
tableData.forEach(function (InitialList) {
    var row = tbody.append("tr");
    Object.entries(InitialList).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {
    tbody.html("");
    var filteredData = tableData
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputValueDate = inputDate.property("value");
    if (inputValueDate) {
        filteredData = filteredData.filter(tableData => tableData.datetime === inputValueDate)
    };

    var inputcity = d3.select("#city");
    var inputValuecity = inputcity.property("value");
    if (inputValuecity) {
        filteredData = filteredData.filter(tableData => tableData.city === inputValuecity)
    };

    var inputstate = d3.select("#state");
    var inputValuestate = inputstate.property("value");
    if (inputValuestate) {
        filteredData = filteredData.filter(tableData => tableData.state === inputValuestate)
    };

    var inputcountry = d3.select("#country");
    var inputValuecountry = inputcountry.property("value");
    if (inputValuecountry) {
        filteredData = filteredData.filter(tableData => tableData.country === inputValuecountry)
    };

    var inputshape = d3.select("#shape");
    var inputValueshape = inputshape.property("value");
    if (inputValueshape) {
        filteredData = filteredData.filter(tableData => tableData.shape === inputValueshape)
    };
    //Render Table
    // Get a reference to the table body
    tbody = d3.select("tbody");
    //Use d3 to update each cell's text with UFO sighting data 
    filteredData.forEach(function (UFOSightings) {
        var row = tbody.append("tr");
        Object.entries(UFOSightings).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
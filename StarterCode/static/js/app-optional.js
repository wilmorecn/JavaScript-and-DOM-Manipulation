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
    // Get the value property of the input element for Date
    var inputValueDate = inputDate.property("value");
    if (inputValueDate) {
        filteredData = filteredData.filter(tableData => tableData.datetime === inputValueDate)
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
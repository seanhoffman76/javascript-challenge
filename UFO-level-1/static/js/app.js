// from data.js
var tableData = data;

//Table data flow from data.js into D3 table within index.html

var tbody = d3.select("tbody");
console.log(tableData);

function dataLoad() {
    tableData.forEach((ufoLog) => {
    var row = tbody.append("tr");
    Object.entries(ufoLog).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Call the dataLoad function to load the data into the table
dataLoad();

// Select the input element and get the raw HTML node
var inputDateTime = d3.select("#datetime");

// Button filtration
var dateButton = d3.select("#date-btn");
var resetButton = d3.select("#reset-btn");

// create a filtering function using the given input
function filterData(){  
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputValDate = inputDateTime.property("value");
  
    console.log(inputValDate);
  
    var filteredData = tableData.filter(function(filVal) {
      return ((filVal.datetime === inputValDate)
    )});
    console.log(filteredData);
  
    var tbody = d3.select("tbody");
    tbody.html("");
  
    filteredData.forEach((sightingDate) => {
      var row = tbody.append("tr");
      Object.entries(sightingDate).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
};

// Add event handler for the filter button to set the table to filtered data
dateButton.on("click", filterData);


// create a function for resetting the table 
function resetData(){
  tbody.text("");
  dataLoad();
  }
  
// Add event handler for the reset button to reset the table to original data 
resetButton.on("click",resetData);
/* EXAMPLE DATA 

var data = [{
  datetime: "1/1/2010",
  city: "benton",
  state: "ar",
  country: "us",
  shape: "circle",
  durationMinutes: "5 mins.",
  comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
},
*/

// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var row = tbody.select("tr");

// Use Object.entries to console.log each value
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");

  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Use d3 to append cells
Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });

// Use d3 to update each cell's value
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select button & form
var filterButton = d3.select("button#filter-btn");
var form = d3.select("#filters");

// Event handlers 
filterButton.on("click", runEnter);
form.on("submit",preventSubmit);

function preventSubmit() {
  d3.event.preventDefault;
};

// Event handler | "runEnter" function
function runEnter() {
  var inputElement = d3.select("#datetime");
  console.log(inputElement);

  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var searchResults = tableData.filter(d => (d.datetime === inputValue));
  console.log(searchResults)


// Reuturn search results in table
tbody.html("");
searchResults.forEach(
  function(ufoData) {
      var row = tbody.append("tr");
      var values = Object.values(ufoData);
      values.forEach(
          function(val){
              row.append("td").text(val);
          }
      )
  }
)};


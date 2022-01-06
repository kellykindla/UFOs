// import the data from data.js
// declare const tableData variable since we dont want it reassigned/reused
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a new function to create a table from our data 
function buildTable(data){
    //clear existing data 
    tbody.html("");

    //add a forEach function to loop through each object in the data array 
    //and add rows of data to table 
    data.forEach((dataRow) => {
        //create a variable that will append a row to table body
        let row = tbody.append("tr");

        //loop through each field in dataRow so they can become table data (<td>)
        //object.values tells JS to reference one object from the array and add it to dataRow
        // tells JS to put each sighting into its own row of data 
        Object.values(dataRow).forEach((val) => {
            //append data to a table 
            let cell = row.append("td");
            //add the values 
            cell.text(val);

        });
    });
}
/** 1. To create a table generator, first create an empty array, myTable, to hold your 
table data.
 2. Set variable values for the number of rows and columns. This will allow us 
to dynamically control how many rows and columns we want within the 
table. Separating the values from the main code helps make updates to the 
dimensions easier.
 3. Set up a counter variable with an initial value of 0. The counter will be used 
to set the content and count the values of the cells within the table.
 4. Create a for loop with conditions to set the number of iterations, and to 
construct each row of the table. Within it, set up a new temporary array 
(tempTable) to hold each row of data. The columns will be nested within 
the rows, generating each cell needed for the column.   
5. Nest a second loop within the first to count the columns. Columns are run 
within the row loop so that we have a uniform number of columns within 
the table. 
[ 97 ]
Loops
 6. Increment the main counter each iteration of the inner loop, so that we track 
a master count of each one of the cells and how many cells are created.
 7. Push the counter values to the temporary array, tempTable. Since the array is 
a nested array representing a table, the values of the counter can also be used 
to illustrate the cell values next to each other in the table. Although these are 
separate arrays representing new rows, the value of the counter will help 
illustrate the overall sequence of cells in the final table.
 8. Push the temporary array to the main table. As each iteration builds a new 
row of array items, this will continue to build the main table in the array.  
9. Output into the console with console.table(myTable). This will show you a 
visual representation of the table structure. */

let myTable=[];
let row=5;
let col=5;
let counter=0;

for(let i=0;i<row;i++){
    let temp=[];
    for(let j=0;j<col;j++){
        counter++;
        temp.push(counter);

    }
    myTable.push(temp);
}
console.table(myTable)
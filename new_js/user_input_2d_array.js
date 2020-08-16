/*
This is user input 2d array example in javascript
*/

var rows = prompt("Enter total Rows : ");
var cols = prompt("Enter Total Columns : ");
var geek = new Array(rows);

for(var i=0; i< rows; i++)
{
	geek[i] = new Array(cols);
}

//user input

for(var i=0; i<rows; i++)
{
	for(var j=0; j<cols; j++)
	{
		geek[i][j] = prompt("Enter Value : ");
	}
}

//display
for(var i=0; i<rows; i++)
{
	for(var j=0; j<cols; j++)
	{
		document.write(geek[i][j] + " ");
	}

	document.write("<br>");
}
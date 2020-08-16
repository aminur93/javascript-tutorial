/*
This is empty 2d array example in javascript
*/

//using array literal
var geek = [[],[]];

//using array constructor
//var geek = new Array([],[]);

for(let i=0; i<2; i++)
{
	for(let j=0; j<3; j++)
	{
		document.write(i + " " + j + " | ");
	}

	document.write("<br>");
}

document.write("<br><br><br>");


//Another example of 2d array
var student = [];
var rows = 5;
var cols = 3;

for(let i=0; i<rows; i++)
{
	student[i] = [];
}

for(let k=0; k<rows; k++)
{
	for(let j=0; j<cols; j++)
	{
		document.write(k + "" + j + " | ");
	}

	document.write("<br>");
}
//using array literal
// var geek = [];
// var rows = 2;
// var col = 3;

// for(var i=0; i<rows; i++)
// {
// 	geek[i] = [];
// }

// for(var i =0; i<rows; i++)
// {
// 	for(var j=0; j<col; j++)
// 	{
// 		document.write(i+" "+j+" | ");
// 	}
// 	document.write("<br>");
// }

//input user from 2d array
var geek = [];
var rows = 2;
var cols = 3;

for(let i=0; i<rows; i++)
{
	geek[i] = [];
}

for(let i =0; i<rows; i++)
{
	for(let j=0; j<cols; j++)
	{
		geek[i][j] = prompt("ENter Value : ");
	}
}

//display value
for(var value of geek)
{
	document.write(value + " <br>");
}
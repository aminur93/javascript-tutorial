/*
This is user input array example in javscript
*/

var em = prompt('Enter Element of array : ');
var geek = [];

//input
for(let i=0; i<=em; i++)
{
	geek[i] = prompt("Enter Your Name : ");
}

//display
for(let value of geek)
{
	document.write(value + "<br>");
}
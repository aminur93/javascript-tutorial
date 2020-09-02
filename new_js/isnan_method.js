/*
This is isnan example in javascript
*/

var a = "50";
var b = 10;
var c = 20;
var d = "Hello";

document.write(isNaN(d) + "<br>");

if(isNaN(d))
{
	document.write("Not a Number <br>");
}else{
	document.write("Legal Number <br>");
}


//infinity
document.write(5/0 + "<br>");

// negitive infinity
document.write(-5/0 + "<br>");
/*
This is checl properties exist or not example in javascript
*/

function Mobile(model_no,price)
{
	this.model = model_no,
	this.price = price
}

var samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");

if (typeof nokia.pirce !== 'undefined') {
	document.write("Available");
}else{
	document.write("does not Exist <br>");
}

if ('memory' in samsung) {
	document.write("Available <br>");
}else{
	document.write("does not exist <br>");
}

if(nokia.hasOwnProperty('memory'))
{
	document.write("Available <br>");
}else{
	document.write("does not exist <br>");
}
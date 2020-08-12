/*
This is  iterate Instance and Prototype Member using for in Loop example in javascript
*/

var Mobile = function (model_no){

	//Instance member
	this.model = model_no;
	this.price = 3000;
};


var samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");

//classname.prototype.key = 'value';
//Prototype Member
Mobile.prototype.color = 'White';




for(var key in samsung)
{
	document.write(key + " : " + samsung[key] + "<br>");
}

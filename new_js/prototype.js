/*
This is prototype example in javascript
*/

var Mobile = function (model_no){

	//Instance member
	this.model = model_no;
	this.price = 3000;
};

//classname.prototype.key = 'value';
//Prototype Member
Mobile.prototype.color = 'White';

var samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");
document.write(samsung.color);
console.log(samsung);





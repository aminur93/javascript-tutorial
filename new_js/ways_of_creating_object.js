/*

This is example  ways of creating object example in javascript
*/

// object literal
var fees = {};
fees['Rahul'] = 200;

//object declare and initial
var fees = {Rahul : 100};

// Object Constructor
var fees = new Object();
fees.Rahul = 100;

//Factory function
function mobile()
{
	return {
		model : "galaxy";
	};
}

var samsung = mobile();
var lg = mobile();

//constructor
function Mobile()
{
	this.model = "Galaxy";
}

var nokia = new Mobile();
var samsung = new Mobile();
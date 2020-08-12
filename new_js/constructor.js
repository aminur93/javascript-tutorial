/*
This is Constructor example in javascript
*/

function Mobile()
{
	this.model = 'Galaxy',
	this.price = '100',
	this.total = function(){
		document.write(this.model + " " + this.price + " " + "<br>");
	}
}

var samsung = new Mobile();
samsung.total();

// Constructor with parameter
function Mobiles(model_no,price)
{
	this.model = model_no,
	this.price = price

	this.show = function(){
		document.write(this.model + " " + this.price + "<br>");
	};
}

var samsung = new Mobiles("Galaxy", 2000);
var lg = new Mobiles("CyberShot",3000);

samsung.show();
lg.show();

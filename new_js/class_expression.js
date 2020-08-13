/*
This is CLass Experssion example in javascript
*/


//Unnamed class expression
var Mobile = class{
	constructor()
	{
		this.a = 10;
		this.show = function(){
			return "Instance member";
		}
	}

	display()
	{
		return "prototype member";
	}
};

var nokia = new Mobile();
// document.write(nokia.a + "<br>");
// document.write(nokia.show() + "<br>");
// document.write(nokia.display() + "<br>");

//named class expression
var Laptop = class Laptop2{

	constructor(model_no,price)
	{
		this.model = model_no;
		this.price = price;
	}

	show(){
		document.write(this.model + " Price is " + this.price);
	}
}

var hp = new Laptop("Pabilion",40000);
hp.show();
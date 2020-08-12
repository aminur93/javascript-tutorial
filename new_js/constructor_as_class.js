/*
This is example of constructor class in javascript

how to create private property 
*/

var Mobile = function(model_no,color,ram,price,sprice)
{
	/*
		using var its goes private property
		var model = model_no 
	*/
	this.model = model_no,
	this.color = color,
	this.ram = ram,
	this.price = price,
	this.sprice = sprice,
	

	this.sellingPrice = function(){
		return (this.price  + this.sprice);
	}

	this.data = function(){
		document.write("Model name :" + this.model + " Color : " + this.color + " Ram : " + this.ram + " All Price : " + this.sellingPrice() + "<br>");
	}
}

var samsung = new Mobile("Galaxy","White","4GB",3000,2500);
samsung.data();
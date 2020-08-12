/*
This is access private property example in javascript
*/
var Mobile = function(model_no,sprice,ram)
{
	
	this.model = model_no;
	this.color = 'White';
	this.ram = ram;
	this.sprice = sprice;
	var price = 200;

	this.sellingPrice = function(){
		return (price);
	};
	
}

var samsung = new Mobile("Galaxy","4GB",2500);

document.write(samsung.sellingPrice());
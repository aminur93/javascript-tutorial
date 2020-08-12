var Mobile = function(model_no){

	//Instance Member
	this.model = model_no;
	this.price = 3000;
}

var samsung = new Mobile('Galaxy');
var nokia = new Mobile('Lumia');

//Protype Declare and Member
Mobile.prototype.color = 'White';

document.write(samsung.color+"<br>");

console.log(samsung);

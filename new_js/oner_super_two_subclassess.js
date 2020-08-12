/*
One Super and Twp Sub Classess example in javascript
*/

//function inheritance
function extend(child, parent)
{
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

//Super Class
var Mobile = function()
{

}

//Prototype Method
Mobile.prototype.getModel = function(){
	return this.model;
}

//Sub Class
var Samsung = function(model,price){

	this.model = model;
	this.price = price;
}

//Sub Class
var Lenevo = function(model){
	this.model = model;
}

//Inheritance
extend(Samsung, Mobile);
extend(Lenevo, Mobile);

Samsung.prototype.getPrice = function(){
	return this.price;
}


var galaxy = new Samsung('Galaxy',3000);
var phab2 = new Lenevo("Phab 2");
document.write(galaxy.getModel() + " " + galaxy.getPrice() + "<br>");
document.write(phab2.getModel() +  "<br>");



// ANother Example
var Laptop = function(model)
{
	this.model = model;
}

Laptop.prototype.getModel = function(){
	return this.model;
}

var HP = function(model,price)
{
	Laptop.call(this, model)
	this.price = price;
}

HP.prototype = Object.create(Laptop.prototype);
HP.prototype.constructor = HP;

var pavilion = new HP('Pavilion5520',20000);
document.write(pavilion.getModel() + "<br>");
document.write(pavilion.price + "<br>");
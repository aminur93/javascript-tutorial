 //Function For inheritance
function extend(child,parent){
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

 //Super class
var Mobile = function(){

}

 //Prototype Method
Mobile.prototype.getModel = function(){
	return this.model;
}

 //Child Class
var Samsung = function(model,price){
	this.model = model;
	this.price = price;
}

 //Child Class 
var Lenevo = function(model){
	this.model = model;
}

 //Inheritance Samsung
extend(Samsung,Mobile);
extend(Lenevo,Mobile);

 //Samsung Prototype
Samsung.prototype.getPrice = function(){
	 return this.price;
}

var s = new Samsung('Galaxy-S9',3000);
var l = new Lenevo('lenev03');

document.write(s.getModel()+" "+s.getPrice()+"<br>");

document.write(l.getModel());


//Another Way To inheritance Prototype
var Mobile = function(model){
	this.model = model;
}

Mobile.prototype.getModel = function(){
	return this.model;
} 

var Samsung = function(model, price){
	Mobile.call(this, model);
	this.price
}

//Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

var s = new Samsung('Galaxy',2000);
console.log(s.getModel());


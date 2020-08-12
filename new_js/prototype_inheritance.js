/*
This is prototype inheritance example
*/

//Super Class
var Mobile = function(){

	this.a = 10;
}

Mobile.prototype.z = 30;

var lg = new Mobile();


// Child CLass
var Laptop = function(){
	Mobile.call(this);
	this.b = 20;
}

//Prototype Inheritance
Laptop.prototype = Object.create(Mobile.prototype);
Laptop.prototype.constructor = Laptop;

//Laptop.prototype.z = 50;

var lg = new Mobile();
document.write("Parent Class property : " + lg.a + "<br>");
document.write("parent class access Child Class Property : " + lg.b + "<br>");
document.write("Parent class prototype property : "+ lg.z + "<br><br>");

var hp = new Laptop();
document.write("Child Class Extend Parent Class property : " + hp.a + "<br>");
document.write("Child Class Property : " + hp.b + "<br>");
document.write("prototype property : "+ hp.z);
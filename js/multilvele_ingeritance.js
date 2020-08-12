//super class
var Mobile = function()
{
	this.a = 10;
}

//prototype property for mobile
Mobile.prototype.z = 30;

//sub class
var Samsung = function(){
	Mobile.call(this);
	this.b = 20;
}

//Samsug child class
var Galaxy = function(){
	Samsung.call(this);
	this.c = 40;
}

//inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor = Galaxy;

var m = new Mobile();
var s = new Samsung();
var g = new Galaxy();

document.write("Galaxy Object can Access <br>");
document.write("Mobile A : "+g.a+"<br>");
document.write("Samsung B : "+g.b+"<br>");
document.write("Mobile Prototype : "+g.z+"<br>");
document.write("Galaxy C : "+g.c+"<br><br>");

document.write("Samsung Object can Access <br>");
document.write("Mobile A : "+s.a+"<br>");
document.write("Samsung B : "+s.b+"<br>");
document.write("Mobile Prototype : "+s.z+"<br>");
document.write("Galaxy C : "+s.c+"<br><br>");

document.write("Mobile Object can Access <br>");
document.write("Mobile A : "+m.a+"<br>");
document.write("Samsung B : "+m.b+"<br>");
document.write("Mobile Prototype : "+m.z+"<br>");
document.write("Galaxy C : "+m.c+"<br><br>");
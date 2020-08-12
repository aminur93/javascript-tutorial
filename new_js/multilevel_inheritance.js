/*
This is Multi level Inheritance example in javascript
*/

//Super class
var Mobile = function()
{
	this.a = 10;
}

//Prototype Member
Mobile.prototype.z = 30;

//Sub class
var Samsung = function()
{
	Mobile.call(this);
	this.b = 20;
}

//Sub class
var Galaxy = function()
{
	Samsung.call(this);
	this.c = 40;
}


//Prototype Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor = Galaxy;

//Create Object
var m = new Mobile();
var s = new Samsung();
var g = new Galaxy();


document.write("Galaxy Property can access <br>");
document.write("Mobile A : "+ g.a + "<br>");
document.write("Samsung B : "+ g.b + "<br>");
document.write("Mobile Prototype Z : "+ g.z+ "<br>");
document.write("Galaxy C : " + g.c + "<br><br><br>");


document.write("Samsung Property can access <br>");
document.write("Mobile A : "+ s.a + "<br>");
document.write("Samsung B : "+ s.b + "<br>");
document.write("Mobile Prototype Z : "+ s.z+ "<br>");
document.write("Galaxy C : " + s.c + "<br><br><br>");


document.write("Mobile Property can access <br>");
document.write("Mobile A : "+ m.a + "<br>");
document.write("Samsung B : "+ m.b + "<br>");
document.write("Mobile Prototype Z : "+ m.z+ "<br>");
document.write("Galaxy C : " + m.c + "<br>");

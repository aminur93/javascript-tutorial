/*
This is method over riding example in javascript
*/

//function inheritance
function extend(child,parent)
{
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

//Super class
var Mobile = function()
{

}

//Prototype memder
Mobile.prototype.show = function(){
	return "I am Super Class Method";
}

//Sub class
var Samsung = function()
{

}

//Sub class Samsung extend super class Mobile
extend(Samsung,Mobile);

//Prototype member sub class
Samsung.prototype.show = function()
{
	return "I am Sub class Method";
}

//Creating sub class Samsung object
var sm = new Samsung();
var mo = new Mobile();
document.write(sm.show() + "<br>");
document.write(mo.show());
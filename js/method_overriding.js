//function extend
function extend(child,parent)
{
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

//super class
var Mobile = function(){

}

Mobile.prototype.show = function(){
	return "I am Super Class";
}

//child class
var Samsung = function(){
	
}


//Inheritance
extend(Samsung,Mobile);

Samsung.prototype.show = function(){
	return "I am Sub Class";
}

var s = new Samsung();
var m = new Mobile();
document.write(s.show()+"<br>");
document.write(m.show()+"<br>");
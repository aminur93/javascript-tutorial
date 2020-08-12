//Parent Class
var Mobile = function() {
	this.a = 10;
}

Mobile.prototype.z =30;

//Child Class
var Samsung = function(){
	Mobile.call(this);
	this.b = 20;
}

//Porottype Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Samsung.prototype.z = 50;

var m = new Mobile();
var s = new Samsung();

document.write(m.a+"<br>");
document.write(m.b+"<br>");
document.write(m.z+"<br>");
document.write(s.z+"<br>");
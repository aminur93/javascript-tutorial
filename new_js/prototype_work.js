/*
This is Prototype work example in javascript
*/

var Mobile = function()
{
	this.a = 20;
}

console.log(Mobile.prototype);

Mobile.prototype.a = 10;

var lg = new Mobile();
console.log(lg.__proto__);
console.log(lg.a);

//verifiy
console.log(Mobile.prototype === lg.__proto__);
console.log(Mobile === lg.__proto__.constructor);
console.log(Mobile === Mobile.prototype.constructor);
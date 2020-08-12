//prototype dependences

var b2 = new String();
console.log(Object.getPrototypeOf(b2));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.getPrototypeOf(Object.prototype));

//How prototype works

function Mobile() {
	this.a = 20;
}

console.log(Mobile.prototype);

Mobile.prototype.a = 10;

var lg = new Mobile();

console.log(lg.a);

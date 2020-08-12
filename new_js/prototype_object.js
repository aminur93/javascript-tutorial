/*
This is Prototype object example in javascript
*/

console.log(Object.prototype);

var b = {};
console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(Object.prototype));

var b1 = new Object();
console.log(Object.getPrototypeOf(b1));
console.log(Object.getPrototypeOf(Object.prototype));

var b2 = new Array();
console.log(Object.getPrototypeOf(b2));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));

var b3 = new String();
console.log(Object.getPrototypeOf(b3));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.getPrototypeOf(Object.prototype));
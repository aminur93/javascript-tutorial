/*
This is logical operator example in javascript
*/

// logical and operator example
var a = 10 > 5; // true
var b = 20 > 8; // true
var c = a && b; // true && true = true

var e = 10 < 5 // false
var f = 20 > 8 // true
var g = e && f // false && true = false

// logical or operator example
var h = 30 < 5; // false
var i = 40 > 10; // true
var j = h || i; // false || true = true

var k = 30 < 20; // false
var l = 50 < 10; // false
var o = k || l   // false || false = false

document.write(o);
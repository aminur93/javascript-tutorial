/*
This is Global Number Method example in javascript
*/

var a = true;
var b = false;
var c = 100;
var d = "100";
var e = "Hello";
var f = new Date();

document.write("True : " + Number(a) + "<br>");
document.write("False : " + Number(b) + "<br>");
document.write("100 : " + Number(c) + "<br>");
document.write("'100' : " + Number(d) + "<br>");
document.write("Hello : " + Number(e) + "<br>");
document.write("date : " + Number(f) + "<br>");

document.write(Math.min(50,3,2,1,40) + "<br>");
document.write(Math.max(50,3,2,1,40) + "<br>");

document.write(Math.floor(2.1) + "<br>");
document.write(Math.floor(6.65) + "<br>");
document.write(Math.floor(0.4) + "<br>");
document.write(Math.floor(0.6) + "<br>");
document.write(Math.floor(-3.1) + "<br>");
document.write(Math.floor(-6.65) + "<br>");


document.write(Math.round(2.1) + "<br>");
document.write(Math.round(6.4) + "<br>");
document.write(Math.round(6.5) + "<br>");
document.write(Math.round(0.2) + "<br>");
document.write(Math.round(0.4) + "<br>");
document.write(Math.round(-6.6) + "<br>");

document.write("<br><br>");
var x = Math.floor(Math.random()*1000 + 1);
document.write(x);

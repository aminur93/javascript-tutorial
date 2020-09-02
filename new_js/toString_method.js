/*
This is to string method example in javascript
*/

var a = 10;
document.write(typeof(a) + "<br>");
document.write(typeof(a.toString()) + "<br>");
document.write("Binary for 10 number : "+a.toString(2) + "<br>");
document.write("Octal for 10 number : " + a.toString(8) + "<br>");
document.write("Hexa for 10 number : " + a.toString(16) + "<br>");

document.write("<br><br>");

document.write("toExponential Method <br>");


//toExponential Method
var b = 2345.678;
document.write(b.toExponential() + "<br>");
document.write(b.toExponential(2) + "<br>");
document.write(b.toExponential(4) + "<br>");

document.write("<br><br>");
document.write("toFixed Method <br>");

var c = 19.34567;
document.write(c.toFixed() + "<br>");
document.write(c.toFixed(2) + "<br>");
document.write(c.toFixed(4) + "<br>");


document.write("<br><br>");
document.write("toPrecision Method <br>");

var d = 19.65823;
document.write(d.toPrecision() + "<br>");
document.write(d.toPrecision(2) + "<br>");
document.write(d.toPrecision(4) + "<br>");
document.write(d.toPrecision(9) + "<br>");


document.write("<br><br>");
document.write("isInteger Method <br>");

document.write("No Parameter " + Number.isInteger() + "<br>");
document.write(" 100 : " + Number.isInteger(100) + "<br>");
document.write(" -100 : " + Number.isInteger(-100) + "<br>");
document.write(" 100.45 : " + Number.isInteger(100.45) + "<br>");
document.write(" 200 -100 : " + Number.isInteger(200-100) + "<br>");
document.write(" 0.1 : " + Number.isInteger(0.1) + "<br>");
document.write('"100" : ' + Number.isInteger("100") + "<br>");

document.write("<br><br>");
document.write("isSafeInteger Method <br>");

document.write("No Parameter : " + Number.isSafeInteger() + "<br>");
document.write(" 100 : " + Number.isSafeInteger(100) + "<br>");
document.write(" -100 : " + Number.isSafeInteger(-100) + "<br>");
document.write(" 100.45 : " + Number.isSafeInteger(100.45) + "<br>");
document.write(" 200-100 : " + Number.isSafeInteger(200-100) + "<br>");
document.write(" 0.1 : " + Number.isSafeInteger(0.1) + "<br>");
document.write(" hello : " + Number.isSafeInteger("Hello") + "<br>");
document.write(" 123234545564564564564564646456456456 : " + 
	Number.isSafeInteger(123234545564564564564564646456456456) + "<br>");

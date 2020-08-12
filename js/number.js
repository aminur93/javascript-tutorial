//Number And Object
var a = 10;
var b = 10.45;
var c = 5e3;
var d = 34e-5;
var x = new Number(100);
var y = "200";
var z = new Number(300);
document.write(typeof(a) + "<br>");
document.write(typeof(b) + "<br>");
document.write(typeof(c) + "<br>");
document.write(typeof(d) + "<br>");
document.write(typeof(x) + "<br>");
document.write(typeof(y) + "<br>");
document.write(typeof(z) + "<br>");

//Number With String

var a = "50";
var b = 10;
var c = 20;
var d = "Hello";

document.write(a+b+c+"<br>");
document.write("Result : "+parseInt(b+c)+"<br>");
document.write("<br>");


// + works as contact with string
document.write(b + c + "<br>");
document.write(a + b + "<br>");
document.write(b + a + "<br>");
document.write(b + d + "<br>");
document.write(d + b + "<br>");
document.write("<br>");

Order then +
document.write(c - b + "<br>");
document.write(a - b + "<br>");
document.write(b - a + "<br>");
document.write(b - d + "<br>");
document.write(d - b + "<br>");
document.write("<br>");

// Nan In Javascript
var a = "50";
var b = 10;
var c = 20;
var d = "Hello";

document.write(b/d);


// Nan is not equal to anything

var a = 12;
document.write(isNaN(a)+"<br>");

if("hello" == NaN)
{
	document.write("Equal");
}else{
	document.write("Not Equal");
}

//IsNaN Method in Javascript
var a = "50";
var b = 10;
var c = 20;
var d = "Hello";

if(isNaN(b))
{
	document.write("Not a Number");
}else{
	document.write("Legal Number");
}

//Infinity Check In javascript
document.write(-5/0);

//ToString In Number javascript
var a = 10;
document.write(typeof(a)+"<br>");
document.write(a.toString(16));

//toExponential Method in JavaScript

var a = 58975.5678923;
document.write(a.toExponential()+"<br>");
document.write(a.toExponential(2)+"<br>");
document.write(a.toExponential(4)+"<br>");

//To Fixed Method javascript
var a = 19.65823;
document.write(a.toFixed()+"<br>");
document.write(a.toFixed(2)+"<br>");
document.write(a.toFixed(4)+"<br>");

//toPrecision Method in JavaScript
var a = 19.65823;
document.write(a.toPrecision()+"<br>");
document.write(a.toPrecision(2)+"<br>");
document.write(a.toPrecision(4)+"<br>");
document.write(a.toPrecision(9)+"<br>");

//is Integer Method in javascript

document.write("No Parameter <br>");
document.write("100 : "+Number.isInteger(100)+"<br>");
document.write("-100 : "+Number.isInteger(-100)+"<br>");
document.write("100.45 : "+Number.isInteger(100.45)+"<br>");
document.write("200-100 : "+Number.isInteger(200-100)+"<br>");
document.write("0.1 : "+Number.isInteger(0.1)+"<br>");
document.write('"100"'+ Number.isInteger("100")+"<br>");
document.write("Hello : "+Number.isInteger("Hello")+"<br>");

//is safe Integer Method in javascript

document.write("No Parameter <br>");
document.write("100 : "+Number.isSafeInteger(100)+"<br>");
document.write("-100 : "+Number.isSafeInteger(-100)+"<br>");
document.write("100.45 : "+Number.isSafeInteger(100.45)+"<br>");
document.write("200-100 : "+Number.isSafeInteger(200-100)+"<br>");
document.write("0.1 : "+Number.isSafeInteger(0.1)+"<br>");
document.write('"100"'+ Number.isSafeInteger("100")+"<br>");
document.write("Hello : "+Number.isSafeInteger("Hello")+"<br>");
document.write("12345678998876654333221234566 : "+Number.isSafeInteger(12345678998876654333221234566)+"<br>");

//Number 
var a = true;
var b = false;
var c = 200;
var d = "100";
var e = "Hello";
var f = new Date();

document.write("True"+ Number(a)+"<br>");
document.write("False"+ Number(b)+"<br>");
document.write("200"+ Number(c)+"<br>");
document.write('"100"'+ Number(d)+"<br>");
document.write("Hello"+ Number(e)+"<br>");
document.write("Date"+ Number(f)+"<br>");


//Parse Int
document.write(parseInt("10")+"<br>");
document.write(parseInt("12.00")+"<br>");
document.write(parseInt("15.45")+"<br>");
document.write(parseInt("10 20 30")+"<br>");
document.write(parseInt(" 90 ")+"<br>");
document.write(parseInt("10 years")+"<br>");
document.write(parseInt("Years 10")+"<br>");
document.write(parseInt("020")+"<br>");
document.write(parseInt("12",8)+"<br>");
document.write(parseInt("0x12")+"<br>");
document.write(parseInt("10",16)+"<br>");

//parse float

document.write(parseFloat("10")+"<br>");
document.write(parseFloat("12.00")+"<br>");
document.write(parseFloat("15.45")+"<br>");
document.write(parseFloat("10 20 30")+"<br>");
document.write(parseFloat(" 90 ")+"<br>");
document.write(parseFloat("10 years")+"<br>");
document.write(parseFloat("Years 10")+"<br>");
document.write(parseFloat("020")+"<br>");

//Math Method
document.write(Math.PI+"<br>");
document.write(Math.sqrt(64)+"<br>");
document.write(Math.abs(-64)+"<br>");
document.write(Math.abs(null)+"<br>");
document.write(Math.pow(2,3)+"<br>");
document.write(Math.trunc(12.564)+"<br>");

//Min and Max Methdo
document.write("Minium : "+Math.min(50,2,1,5,10)+"<br>");
document.write("Maximum : "+Math.max(50,200,100,500,10)+"<br>");

//Floor Method
document.write(Math.floor(2.1)+"<br>");
document.write(Math.floor(6.65)+"<br>");
document.write(Math.floor(0.4)+"<br>");
document.write(Math.floor(0.6)+"<br>");
document.write(Math.floor(-2.1)+"<br>");
document.write(Math.floor(-6.65)+"<br>");

//Round Method
document.write(Math.round(2.1)+"<br>");
document.write(Math.round(6.4)+"<br>");
document.write(Math.round(6.5)+"<br>");
document.write(Math.round(6.6)+"<br>");
document.write(Math.round(0.4)+"<br>");
document.write(Math.round(0.5)+"<br>");
document.write(Math.round(-2.1)+"<br>");
document.write(Math.round(-6.4)+"<br>");
document.write(Math.round(-6.5)+"<br>");
document.write(Math.round(-6.6)+"<br>");

//Random Number
var x = Math.floor(Math.random()*10000 + 1);
document.write(x);


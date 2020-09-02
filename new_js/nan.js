/*
This is nan example in javascript
*/

//nan (Not a Number)
var a = "Hello";
var b = 10;
var c = 20;

var d = "50";

document.write(b/a + "<br>");

var x = "Hello";
var y = 10;
document.write(isNaN(x) + "<br>");
document.write(isNaN(y) + "<br>");

if(x == NaN)
{
	document.write("Equal");
}else{
	document.write("Not Equal");
}

// var arr = prompt("Enter Array Size : ");
// var n = [];
// for(let i=0; i<arr; i++)
// {
// 	n[i] = prompt("Enter Your Value : ");
// }

// function simpleArraySum(arr, n=[])
// {
// 	document.write(arr);
// 	document.write("<br>");

// 	//display
// 	for(var value of n)
// 	{
// 		document.write(value + " ");
// 	}

// 	document.write("<br>");

// 	var sum = 0;

// 	for (var j = 0; j < n.length; j++) {

// 	  sum = (parseInt(sum) + parseInt(n[j]));
// 	}

// 	document.write(sum);
	
// }

// simpleArraySum(arr,n);


//another way 

// var ar = [1000];
// var n = prompt(" ");
// var sum = 0;

// for(let i=0; i<n; i++)
// {
// 	ar[i] = prompt(" ");
// 	sum = (parseInt(sum) + parseInt(ar[i]));
// }

// document.write(sum);






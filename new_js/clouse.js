/*
This is clouser example in javascript
*/

var i = 10;
function show() {
	
	var j = 20;
	document.write(j +"<br>");
	document.write(i +"<br><br>");
}
show();

function disp1()
{
	var j = "J is a local varibale in outer function";

	document.write(j + "<br>");

	function Innerfun()
	{
		var k = "k is a local varibale in Inner Function";

		document.write(k + "<br>");
		document.write(j + "<br>");
	}

	Innerfun();

	document.write(k + "<br>");
}

disp1();
/*
This is Default parameter example in javascript
*/

//default parameter function
function disp(a,b=40,c=90) {
	
	document.write("A : "+a+" B : "+b+" C : "+c+"<br>");
}

//calling function
disp(10)

//second function with null
function display(num1,num2,num3=null) {
	
	document.write("E : "+num1+"<br>");
	document.write("F : "+num2+"<br>");
	document.write("G : "+num3+"<br>");
}

display(10,20);

//default parameter with array
function add(num, a=["Aminur","Rashid"]) {
	
	document.write(" I : "+a[0]);
	document.write(" k : "+a[1]);
	document.write(" J : "+num);
}

add(20);
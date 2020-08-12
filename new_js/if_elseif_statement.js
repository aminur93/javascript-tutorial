/*
if and elseif statement example in javascript
*/

var result = prompt("Enter Your Result : ");

if ((result >= 30) && (result <= 39)) {
	document.write("Fail");
}else if((result >= 40) && (result <= 59)){
	document.write("pass");
}else if((result >= 60) && (result <=79)){
	document.write("good");
}else{
	document.write("very good");
}
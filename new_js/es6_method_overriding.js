/*
This is method overriding example in javascript
*/

class Father {

	show()
	{
		return " I am Super class <br>";
	}
}

class Son extends Father{

	show(){
		return "I am Sub class <br>";
	}
}

var s = new Son();
document.write(s.show());

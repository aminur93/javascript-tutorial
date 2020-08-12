class Father {
	show(){
		return "Super Class <br>";
	}
}

class Son extends Father {
	show(){
		return "Sub class <br>";
	}
}

var s = new Son();
document.write(s.show());
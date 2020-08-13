/*
es 6 class example in javascript
*/

class Mobile{

	constructor()
	{
		//Instance member
		this.a = 10;
		this.show = function(){
			return "Instance Member";
		}
	}

	//Prototype Member
	display(){
		return "Prototype Member";
	}
}

var nokia = new Mobile();
document.write(nokia.a + "<br>");
document.write(nokia.show() + "<br>");
document.write(nokia.display());
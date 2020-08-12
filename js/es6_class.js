class Mobile{
	constructor()
	{
		//Instance Member
		var a = 10; //private property
		this.show = function(){
			return a;
		}
	}

	//Portotype Member
	display(){
		return "Prototype Method";
	}
}

var nokia = new Mobile();
document.write(nokia.show());
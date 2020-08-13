/*
This is es 6 inheritance exaple in javascript
*/

//Parent class
class Father{

	showFmoney()
	{
		return "Father Monery <br>";
	}
}


//Child class
class Son extends Father{

	showSmoney()
	{
		return "Son Monery <br>";
	}
}

//Grand son class
class GrandSon extends Son{

	showGrandSon()
	{
		return "Grand Son Money <br>";
	}
}

var s = new Son();
var g = new GrandSon();

document.write(g.showFmoney());
document.write(g.showSmoney());
document.write(g.showGrandSon());
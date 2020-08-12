class Father {

	showFMoney()
	{
		return "Father Money <br>";
	}
}

class Son extends Father{

	showSMoney()
	{
		return "SOn Money <br>";
	}
}

class Grand extends Son{

	showGMoney()
	{
		return "Grand Son Money";
	}
}



var g = new Grand();

document.write(g.showFMoney());

document.write(g.showSMoney());

document.write(g.showGMoney());
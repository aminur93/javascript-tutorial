/*
This is super method example in javascript
*/

class Father{

	constructor(money)
	{
		this.Fmoney = money;
	}

	showFMoney()
	{
		return this.Fmoney + " Father Money <br>";
	}
}


class Son extends Father{

	constructor(money)
	{
		super(money);
		this.a = 200;
	}

	showSMoney()
	{
		return "Son Monery <br>";
	}
}

var s = new Son(10000);
document.write(s.showFMoney());
document.write(s.showSMoney());
document.write(s.a);
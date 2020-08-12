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
		this.a = 12;
	}

	showSMoney()
	{
		return "Son Money <br>";
	}
}

var s = new Son(1000);
document.write(s.showFMoney());
document.write(s.showSMoney());
document.write(s.a);
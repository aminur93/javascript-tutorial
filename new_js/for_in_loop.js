/*
This is for in loop example in javascript
*/

function Mobile(model_no,color,price,ram)
{
	this.model = model_no,
	this.color = color,
	this.price = price,
	this.ram = ram

	this.show = function(){
		document.write(this.model + " " + this.color + " " + this.price + " " + this.ram);
	};
}

var samsung = new Mobile("Galaxy","White",3000,"4GB");
var lg = new Mobile("CyberShot","Black",6000,"8GB");

for(var spacs in lg)
{
	if(typeof lg[spacs] !== 'function'){
		document.write(spacs + " : " + lg[spacs] + "<br>");
	}
	
}


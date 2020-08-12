/*
This is Factory Function example in javascript
*/

function mobile()
{
	return {

		model : "Galaxy",
		price : 100,
		total : function(){
			return (100+200+300);
		}
	}
}

var samsung =  mobile();

document.write(samsung.model + " " + samsung.price + " " + samsung.total() + "<br>");

// factory function with parameter

function Mobile(model_no,price)
{
	return {
		model : model_no,
		price : price,
		total : function(){
			return (100+200+300);
		}
	};
}

var samsung = Mobile("Galaxy",200);
var nokia = Mobile("3310",300);

document.write(samsung.model + " " + samsung.price + " " + samsung.total() + "<br>");
document.write(nokia.model + " " + nokia.price + " " + nokia.total());
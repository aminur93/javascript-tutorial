/*
This is javscript switch example
*/

var action = prompt("Enter Your Sign : "," like +,-,*,/");

var first_number = prompt("Enter Your First Number : ");

var second_number = prompt("Enter Your Second Number : ");


switch(action)
{
	case '+':
		document.write("Adding Result : " + (parseInt(first_number) + parseInt(second_number)));
		break;

	case '-':
		var result = (parseInt(first_number) - parseInt(second_number));
		document.write("Subtract Result : " + result);
		break;

	case '*':
		document.write("Multiplication Result : " + (parseInt(first_number) * parseInt(second_number)));
		break;

	case '/':
		document.write("Dividason Result : " + (parseFloat(first_number) / parseFloat(second_number)));
		break;

	default:
		document.write("Something Went Wrong");
}
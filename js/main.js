/*
*
*this is javascript file
* In this file i will finish lots of chapter in javascript
*/

var price = 123.34, total=4000, grand=price+total;
document.write(price+" <br>");
document.write(total+" <br>");
document.write(grand+" <br>");

/*
end section
 */

/*
*now start artimetic operator
* in javascript
* start
 */

var a = 20;
a++;
var b = 10;
b--;
var c = a + b + 30;
document.write("The result of C  : "+c);

/*
end
 */

/*
start with relational opertaor in javascript
 */

var a = 20;
var b = 10;
var c = a !== b;
document.write(c)

/*
end
 */

/*
start with logical operator
 */

var a = 10>5;
var b = !(20>8);
var c = a || b;
document.write(b);

/*
end
 */

/*
start with bitwise operator
 */

var a = 5;
var b = 6;
var c = a | b;
document.write(c);

/*
end
 */

/*
start with assigin operator
 */

var m = 10;
    m %=20;
    document.write(m);

/*
end
 */

/*
start javascript prompt method
 */

var a = parseInt(prompt("Enter your number1 : "));
var b = parseInt(prompt("Enter your number2 : "));

document.write(a+b);

/*
end
 */

/*
start javascript if statement
 */

var a = parseInt(prompt("Enter your first number : "));
var b = parseInt(prompt("Enter your second number : "));
var c = prompt("Enter your opertion sign : ");

if (c == '+'){
    document.write(a+b);
}else if(c == '-'){
    document.write(a-b);
}else if(c == '*'){
    document.write(a*b);
}else if (c == '/'){
    document.write(a/b);
}else {
    document.write("Something went wrong");
}

/*
end javascript if
 */

/*
start with switch javascript
 */

var vowel = prompt("Enter your word : ");

switch (vowel)
{
    case 'A':
        document.write("A is Vowel");
        break;

    case 'a':
        document.write("a is Vowel");
        break;

    case 'E':
        document.write("E is Vowel");
        break;

    case 'e':
        document.write("e is Vowel");
        break;

    case 'I':
        document.write("I is Vowel");
        break;

    case 'i':
        document.write("i is Vowel");
        break;

    case 'O':
        document.write("O is Vowel");
        break;

    case 'o':
        document.write("o is vowel");
        break;

    case 'U':
        document.write("U is Vowel");
        break;

    case 'u':
        document.write("u is vowel");
        break;

    default:
        document.write("This Word is Consonent");
        break;
}

/*
end switch javascript
 */
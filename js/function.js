//Creating function
function display() {
    document.write("GeekyShows");
}
//calling function
display();

//how function call works
document.write("First Line <br>");
document.write("Second Line <br>");

function display() {
    document.write("Inside Fucntion");
}

document.write("Third Line <br>");
display();

//function with parameter
function display(first_name,last_name) {
    document.write(first_name+" "+last_name);
}

display("Aminur","Rashid");

//function Argument missing
function add(a,b,c) {
    document.write("A: "+a+" B: "+b+" C: "+c);
}
add(10,20,30);

//arguments object in javascript
function disp() {
    document.write(name);
    arguments[0] = "Hello";
    document.write(arguments[0]+" "+arguments[1]);
    document.write(arguments.length);

    for (var i =0; i < arguments.length; i++){
        document.write(arguments[i] + " ");
    }
}
disp("Welcome","GeekyShows","World");

//Too many function Arguments
function add(a,b) {
    document.write("A: "+a+" B: "+b+" <br>");
    document.write("C: "+arguments[2]+" D: "+arguments[3]);
}
add(10,20,30,40);

//function with default parameter
function disp(a,b,c=70) {
    document.write("A : "+a+" <br>");
    document.write("B : "+b+" <br>");
    document.write("C : "+c+" <br>");
}

disp(10,20);


/*
start with function in ajavscript
 */

function disp() {
    document.write("Hello javascript");
}

disp();

/*
end function
 */

/*
start rest parameter in javascript
 */

function show(a,b,c, ...args) {
    document.write(args[1]+"<br>");
    document.write(a+"<br>");
    document.write(b+"<br>");
    document.write(c+"<br>");
}

show(10,20,30,40,50,60);

/*
end
 */


/*
start rest and arguments
 */

function restShow(a,...args) {
    console.log("a : "+a);
    console.log(args);
}
restShow(10,20,30,40,50,60);

function show(a) {
    console.log("a : "+a);
    console.log(arguments);
}

show(10,20,30,40,50,60);

/*
end
 */

/*
start return statement in javascript
 */

// function show(a,b) {
//     return (a+b);
// }
//
// document.write(show(10,20)+"<br>");
// document.write(show(30,20));

/*
end
 */

/*
start varibale scope in javascript
 */

var i = "I am global variable"; //Global Variable

function show() {
    document.write(i+"<br>"); //inside function
}
show();

document.write(i+"<br>"); //Global Variable

function display() {
    document.write(i+"<br>"); //inside function
}
display();

if (true)
{
    document.write(i+"<br>"); //inside block
}

function local() {
    //local varibale
     a = 10;
    document.write(a+"<br>");
}
local();

if (true)
{
    //local variable is not access
    //if in function local var remove it will be global variable and its working
    document.write(a+"<br>");
}

function outer() {
    //Local Variable
    var j = "J is a Local Variable of Outter Function";
    document.write(j+"<br>");

    function inner() {
        //Local Variable
        var e = "I is a Local Varibale Inner Function";
        document.write(e+"<br>");
        document.write(j+"<br>");
    }
    inner();
    //document.write(e+"<br>");
}

outer();

/*
end
 */
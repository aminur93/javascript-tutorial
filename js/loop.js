/*
start for loop in js
 */

// var i = 0;
// for (; ; i++)
// {
//     if (i == 3)
//     {
//         break;
//     }
//     document.write(i+" <br>");
//
// }
// document.write("Res of the code");

/*
end for loop
 */

/*
start nested for loop
 */

// for (i=0; i<3; i++)
// {
//     document.write("<strong>Outer for loop</strong>");
//     document.write(i);
//     document.write("<br>");
//
//     for(j=0; j<5; j++)
//     {
//         document.write("<strong>Inner for loop</strong>");
//         document.write(j);
//         document.write("<br>");
//     }
// }

/*
end nested for loop
 */

/*
start with while loops
 */

// var i =0;
// while (true)
// {
//     if (i == 3)
//     {
//         break;
//     }
//     document.write("<strong>This is while loop</strong>" + i+" <br>");
//     i++;
// }

/*
end while loops
 */

/*
start hested while loops in javascript
 */

// var i=0;
// while (i<3)
// {
//     document.write("<strong>Outter while loops</strong>"+" "+i+" <br>");
//     i++;
//
//     var j=0;
//     while (j<5)
//     {
//         document.write("<strong>Inner while loops</strong>"+" "+j+" <br>");
//         j++;
//     }
// }

/*
end nested for loops
 */

/*
start do while loops in javascript
 */

// var i =0;
// do {
//     if (i == 3)
//     {
//         break;
//     }
//     document.write(i);
//     i++;
//     document.write("<br>");
// }while(true);

/*
end do while loops
 */

/*
start nested do while loops javascript
 */

// var i =0;
//
// do {
//     document.write("<strong>Outter do while loops</strong>"+" "+i+" <br>");
//     i++;
//
//     var j =0;
//     do{
//         document.write("<strong>Inner do while loops</strong>"+" "+j+" <br>");
//         j++;
//     }while (j<5);
// }while (i<3);

/*
end do while nested loops
 */

/*
start break and countrine in javascript
 */

for (i = 1; i<=5; i++)
{
    if (i == 3)
    {
        continue;
    }

    document.write(i);
    document.write("<br>");
}

/*
end break and contrinue
 */
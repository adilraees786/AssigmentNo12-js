 /*Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

document.write(`<h1> Task 1`)
var num=29.5;
document.write(`<h3> Original Number is:  ${num} <br>` );
var value=Math.round(num);
document.write( `Rounded Value of ${num} is: ${value} <br>`);
 var floor=Math.floor(num);

 document.write( `Floor Value of ${num} is:  ${floor} <br>`);

 var ceil=Math.ceil(num);
 document.write( `Ceil  Value of ${num} is ${ceil} <br>`);

 document.write("<br>")
 document.write("<br>")

 document.write(`<h1> Task 2`)

 /*Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var num=-19.6;
document.write(`<h3> Original Negative Number is:  ${num} <br>` );
var value=Math.round(num);
document.write( `Rounded Value of ${num} is: ${value} <br>`);
 var floor=Math.floor(num);

 document.write( `Floor Value of ${num} is:  ${floor} <br>`);

 var ceil=Math.ceil(num);
 document.write( `Ceil  Value of ${num} is ${ceil} <br>`);

 document.write("<br>")
 document.write("<br>")


 document.write(`<h1> Task 3`)


  /*Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var abs= 10;
document.write(`<h3> Given Absolute Value is: ${abs}`)
 var newabs= Math.abs(abs);
 document.write(`<h3> Absolute value of ${abs} is:  ${newabs} `)
  

 document.write("<br>")
 document.write("<br>")

 document.write(`<h1> Task 4`)

 /*Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser? */


var dice=Math.floor(Math.random()*7)+1 ;

document.write('<br>')

document.write(`<h3> Random Dice Value is: ${dice}`)

document.write("<br>")
document.write("<br>")

document.write(`<h1> Task 5`)
/** Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser?*/

let random=Math.random();
 let convetvalue= Math.round(random)+1;

 if(convetvalue == 2){
    document.write(`<h3> Ramdom Coin value: Head`)

 }
 else{

    document.write(`<h3> Ramdom Coin value: Tail`)

 }

 document.write("<br>")
document.write("<br>")

document.write(`<h1> Task 6`)

/**Write a program that shows a random number between 1
and 100 in your browser. */

var rndnum=Math.round(Math.random() *100);

document.write(` <h3> Random Number between 1 to 100 is : ${rndnum}`);


document.write("<br>")
document.write("<br>")

document.write(`<h1> Task 7`)

/**Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser? */


var userinput =prompt("Enter Your Weight:")

document.write('<br>')

Math.round(document.write(` <h3> Your weight is: ${userinput} kg`));


document.write("<br>")
document.write("<br>")


document.write(`<h1> Task 8`)

/** Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.*/

var randomnumber= Math.round(Math.random()*9) +1;

var guessnumber = prompt("Enter a Guess Number:")

if(guessnumber == randomnumber){
    alert(`You Win ${guessnumber} = ${randomnumber}`)
}
else{
    alert(`Try Agin ${guessnumber} != ${randomnumber}`)
}

document.write(`<h3> Check Alert for Output`)

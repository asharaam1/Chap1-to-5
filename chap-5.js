// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = +prompt("enter the number 1 for ADDITION");
var num2 = +prompt("enter the other number");
var result = num1 + num2;

var final = "Sum of "+ num1 + " and "+ num2 + " is " + result
var para = document.querySelector("#para")
para.innerHTML = (final)
console.log(final);




// 2. Repeat task1 for subtraction, multiplication, division & modulus.
/*var num1 = +prompt("enter the  first number for SUBTRACTION ");
var num2 = +prompt("enter the second number ");
var result = num1 - num2;

var final = "Substraction of "+ num2 + " from "+ num1 + " is " + result
para.innerHTML = final 
console.log(final); */


/* var num1 = +prompt("enter the  first number for MULTIPLICATION ");
var num2 = +prompt("enter the second number ");
var result = num1 * num2;

var final = " Multiplication of " + num1 + " and " + num2 + " is equal to " + result
para.innerHTML = final
console.log(final) */


/* var num1 = +prompt("enter the  first number for DIVISION");
var num2 = +prompt("enter the second number ");
var result = num1 / num2;
console.log(num1 + " Divided by " + num2 + " is equal to " + result)

var final = num1 + " Divided by " + num2 + " is equal to " + result

para.innerHTML = final */



/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value after decrement is: 12”.
k. Show the remainder after dividing the variable’s value by 3.
l. Output : “The remainder is : 0”.*/

//a)
var value;
//b)
var value = "Value after variable declaration is: ??"
console.log(value);
//c)
var num1 = 5;
//d)
console.log("Initial value: "+ num1);
//e)
num1++;
//f)
console.log("Value after increment is: "+num1);
//g)
num1 += 7;
//h)
console.log("Value after addition is: "+num1);
//i)
num1--;
//j)
console.log("Value after decrement is: "+num1);
//k)
num1/=3;  //num1=num1%3
//l)
console.log("The remainder is: "+num1);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var oneTicket= 600;
// var numofTickets=5;
// var total = oneTicket * numofTickets
// console.log("Total cost to buy "+numofTickets+" tickets to a movie is "+total+"PKR");

// 5. Write a script to display multiplication table of any number in your browser. E.g Table of 8
// console.log("Table of 8");
// var num = 8;
// console.log("8x1="+(num*1));
// console.log("8x2="+(num*2));
// console.log("8x3="+(num*3));
// console.log("8x4="+(num*4));
// console.log("8x5="+(num*5));
// console.log("8x6="+(num*6));
// console.log("8x7="+(num*7));
// console.log("8x8="+(num*8));
// console.log("8x9="+(num*9));
// console.log("8x10="+(num*10));


/*6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/
// var c = 25;
// var f_formula=(c*9/5)+32;
// var f=70;
// var c_formula= (f-32)*5/9;
// console.log(c + "°C  is " + f_formula+"°F");
// console.log(f + "°F  is " + c_formula + "°C");

/*7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges*/
// console.log("Shopping Cart");
// var p_1=650;
// var p_2=100;
// var or_Q_1=3;
// var oQor_Q_2=7;
// var shipCharges=100;
// var total= (or_Q_1*p_1)+(oQor_Q_2*p_2)+shipCharges;
// console.log("Price of item 1 is "+p_1);
// console.log("Quantity of item 1 is "+or_Q_1);
// console.log("Price of item 2 is "+p_2 );
// console.log("Quantity of item 2 is "+oQor_Q_2);
// console.log("Shipping Charges "+shipCharges);
// console.log("\n\nTotal cost of your order is "+total);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// console.log("Marks Sheet");
// var total_marks =  980;
// var obtain_marks = 804;
// var percentage = (obtain_marks/total_marks)*100;
// console.log("Total Marks: "+total_marks);
// console.log("Marks obtained: "+obtain_marks);
// console.log("Percentage: "+percentage+"%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// console.log("Currency in PKR");
// var dollars=10;
// var riyals=25;
// var pkr=(10*104.80)+(25*28);
// var totalCurrency=pkr;
// console.log("Total Currency in PKR: "+totalCurrency);


/* 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2 Perform all calculations in a single expression */
// var num=1;
// var results = num+5;
// console.log(results);
// results*=10;
// console.log(results);
// results/=2;
// console.log(results);


/*11. The Age Calculator: Forgot how old someone is? Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN
years old” */
// console.log("Age calculator");
// var current_year = 2016;
// var birth_year = 1992;
// var age1 = 2016-1992;
// // var age2=age1-1;
// var output = "Current year: 2016 \n" + "Birth Year: 1992 \n" + "Your age is "+age1
// console.log(output);

// var para = document.querySelector("#para")
// para.innerHTML = output 

/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
// console.log("The Geometrizer");
// var r=20;
// var circumference=2*3.142*r;
// var area=3.142*r*r;
// console.log(("Radius of a circle: "+r) +("\nThe circumference is "+circumference) + ("\nThe area is "+area) );

// console.log("The circumference is "+circumference);
// console.log("The area is "+area);


/*13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”.*/
// var favSnack="Dark-Choclate";
// var currentAge=16;
// var maxAge=95;
// var snack_day =2;
// var totalSnack=((maxAge-currentAge)*snack_day);
// var browser = `Favourite Snack: ${favSnack} <br/>
// Current Age: ${currentAge}<br/>
// Estimated MAximum Age: ${maxAge}<br/>
// Amount of snacks per day: ${snack_day}<br/>
// You will need ${totalSnack} ${favSnack} to last you until the ripe old age of ${maxAge}.`
// var para = document.querySelector("#para")
// para.innerHTML = browser

// console.log("You will need "+totalSnack+" "+favSnack+" to last you until the ripe old age of "+maxAge+".");

// // console.log(browser);



// All Done



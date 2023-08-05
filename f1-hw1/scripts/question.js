//---------------------------Q1--------------------------------// 

// let num1 = 5 ;
// let num2 = 10 ;
// (num1 >= num2 ) ? console.log("The answer is " + num1) : console.log("The answer is " + num2);

//---------------------------Q2--------------------------------//

// const value = +prompt(" insert your number : ");
// if (isNaN(value))
//     console.log("You have not entered a number");
// else
//     console.log(value + " " + " is number");

//---------------------------Q3--------------------------------// 

// const num = +prompt(" insert your number : ");
// if (isNaN(num)) {
//     console.log("You have not entered a number ");
// }else {
//      (num % 2) === 0 ? console.log("the given number is even") : console.log("the given number is odd");
// }

//---------------------------Q4--------------------------------//

// const yourNumber = +prompt("insert your number : ");
// const range1 = +prompt("insert your first range : ");
// const range2 = +prompt("insert your second range : ");

// if (isNaN(yourNumber) || isNaN(range1) || isNaN(range2)) {
//     console.log("You have not entered a number for your number or ranges");
// } else if ( range1 >= range2){
//     console.log("You have not entered correct ranges");
// }
// else {
//     if (yourNumber >= range1 && yourNumber <= range2)
//         console.log(" the given number is in range");
//     else
//         console.log(" the given number is not in range");
// }

//---------------------------Q5--------------------------------//

// for (let i = 0; i <= 15; i++)
//     (i%2 == 0) ? console.log(i + " : even") : console.log(i + " : odd");
    

//---------------------------Q6--------------------------------//

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else {
//         if (i % 3 == 0) {
//             console.log("Fizz");

//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
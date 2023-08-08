// برنامه ای بنویسید که در ادامه ی سوال قبلی تشخیص دهد آیا عدد زوج است یا فرد


const num = +prompt(" insert your number : ");
if (isNaN(num)) {
    console.log("You have not entered a number ");
}else {
     (num % 2) === 0 ? console.log("the given number is even") : console.log("the given number is odd");
}
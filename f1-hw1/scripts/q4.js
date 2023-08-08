//  برنامه بنویسید که تشخیص دهد یک عدد بین بازه ی دو عدد دیگر هست یا خیر.)مثال آیا 12 بین دو عدد 11 و 30 قرار دارد یا خیر(



const yourNumber = +prompt("insert your number : ");
const range1 = +prompt("insert your first range : ");
const range2 = +prompt("insert your second range : ");

if (isNaN(yourNumber) || isNaN(range1) || isNaN(range2)) {
    console.log("You have not entered a number for your number or ranges");
} else if ( range1 >= range2){
    console.log("You have not entered correct ranges");
}
else {
    if (yourNumber >= range1 && yourNumber <= range2)
        console.log(" the given number is in range");
    else
        console.log(" the given number is not in range");
}

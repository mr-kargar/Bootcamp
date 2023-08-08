// برنامه ای بنویسید که یک ورودی از کاربر بگیرد و تشخیص دهد آیا ورودی عدد هست یا خیر


const value = +prompt(" insert your number : ");
if (isNaN(value))
    console.log("You have not entered a number");
else
    console.log(value + " " + " is number");
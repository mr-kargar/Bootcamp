//تابعی بنویسید که دو عدد در ورودی دریافت کند و آرایه ای از مضرب های عدد اول را به تعداد عدد دوم را چاپ نماید.

function multiplier(number, quantity) {
    let multiples = [];
    for (let i = 1; i <=quantity; i++)
        multiples.push(number * i);
    console.log(multiples);
}

multiplier(7,5);
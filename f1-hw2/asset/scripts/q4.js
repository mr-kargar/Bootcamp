function multiplier(number, quantity) {
    let multiples = [];
    for (let i = 1; i <=quantity; i++)
        multiples.push(number * i);
    console.log(multiples);
}

multiplier(7,5);
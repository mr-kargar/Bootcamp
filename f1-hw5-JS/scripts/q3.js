function calculate(operand1 , operand2 , operator){
    console.log(operator(operand1,operand2));
}

const displaySum = (operand1 , operand2) => {
    return operand1 + operand2;
}

calculate(4,100,displaySum);
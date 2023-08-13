function digitSeparator(number) {
  let digits = [];
  while (number > 10) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  digits.push(number);
  return digits;
}

function existInArray(array, number) {
  for (let index = 0; index < array.length; index++) {
    let digits = digitSeparator(array[index]);
    for (let j = 0; j < digits.length; j++) {
      if (digits[j] === number) return true;
    }
  }
  return false;
}

console.log(existInArray([12, 15, 0, 36, 44], 4));

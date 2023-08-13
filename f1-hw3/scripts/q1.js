function sum(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) result += i;
  return result;
}


let num = 10 ;
console.log(`sum of 1 to ${num} is :  ${sum(num)}`);

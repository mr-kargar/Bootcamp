function Fibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

function FibonacciSequence(number) {
  let FibonacciSequenceStr = "";
  for (let i = 1; i <= number; i++) {
    FibonacciSequenceStr += Fibonacci(i) + " ";
  }
  return FibonacciSequenceStr;
}

console.log(FibonacciSequence(10));

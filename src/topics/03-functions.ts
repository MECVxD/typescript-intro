function addNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

const addNumbersArrow = (firstNumber: number, secondNumber: number): string => {
  return `${firstNumber + secondNumber}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: BigIntToLocaleStringOptions = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult });

export {};

export default function calculate(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      console.log("!invalid input in calculate");
      return "!";
  }
}

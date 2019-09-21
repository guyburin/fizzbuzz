class FizzBuzz {
  static say(number) {
    if (number % 3 == 0 && number % 5 == 0) {
      return "FizzBuzz";
    } else if (number % 3 == 0) {
      return "Fizz";
    } else if (number % 5 == 0) {
      return "Buzz";
    } else {
      return number;
    }
  }
}

module.exports = FizzBuzz;
// for (let i = 0; i < 100; i++) {
//   console.log( say(i));
// }

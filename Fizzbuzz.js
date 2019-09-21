class FizzBuzz {
  static say(number) {
    switch (true) {
      case number % 3 == 0 && number % 5 == 0:
        return "FizzBuzz";
        break;
      case number % 3 == 0:
        return "Fizz";
        break;
      case number % 5 == 0:
        return "Buzz";
        break;
      default:
        return number;
        break;
    }
  }

  //   static mod(number, base) {
  //     return number - Math.floor(number / base) * base;
  //   }
}

module.exports = FizzBuzz;
// for (let i = 0; i < 100; i++) {
//   console.log( say(i));
// }

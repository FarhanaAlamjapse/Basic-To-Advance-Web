function checkDriverAge(a) {
  if (a < 18) {
    return "Sorry you are too young to drive this car.Powering off";
  } else if (a > 18) {
    return "Powering on.Enjoy the ride";
  } else if (a == 18) {
    return "Congratulations";
  }
}
var age = checkDriverAge(19);
console.log(age);

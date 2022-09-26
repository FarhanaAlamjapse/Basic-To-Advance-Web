//scope
// var b = "Can I access this?";
// function bb() {
//   var b = "hello";
// }

// var fun = 3;
// function funFunction() {
//   // child scope
//   var fun = "Hello";
//   console.log(1, fun);
// }

// function funnerFunction() {
//   // child scope
//   var fun = "Bye";
//   console.log(2, fun);
// }

// function funnestFunction() {
//   // child scope
//   fun = "AHHHHH";
//   console.log(3, fun);
// }

// console.log("window", fun);
// console.log(funFunction());
// console.log(funnerFunction());
// console.log(funnestFunction());

// ternary
function isValid(water) {
  return water;
}
var density = isValid(true) ? "swim" : "risky";

var accout = "your acount # is" + (isValid(true) ? "correct" : "wrong");

// switch
function moveCommand(direction) {
  var whatHappens = 9;
  switch (direction) {
    case "for":
      break;
      whatHappens = "monkey";

    case "back":
      whatHappens = "horse";
      break;
    case "left":
      whatHappens = "donkey";
      break;
    case "right":
      whatHappens = "ass";
      break;
    default:
      whatHappens = "enter valid direction";
  }
  return whatHappens;
}

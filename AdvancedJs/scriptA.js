//scope
// var b = "Can I access this?";
// function bb() {
//   var b = "hello";
// }

var fun = 3;
function funFunction() {
  // child scope
  var fun = "Hello";
  console.log(1, fun);
}

function funnerFunction() {
  // child scope
  var fun = "Bye";
  console.log(2, fun);
}

function funnestFunction() {
  // child scope
  fun = "AHHHHH";
  console.log(3, fun);
}

console.log("window", fun);
console.log(funFunction());
console.log(funnerFunction());
console.log(funnestFunction());

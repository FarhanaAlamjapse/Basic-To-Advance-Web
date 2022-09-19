var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  // todos.pop();
  console.log(i);
}

todos.forEach(function (h, i) {
  console.log(h, i);
});

// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 10);

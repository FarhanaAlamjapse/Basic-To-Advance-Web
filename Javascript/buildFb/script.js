var database = [
  {
    username: "faru",
    password: "123",
  },
];
var newsfeed = [
  { username: "sakib", timeline: "js is cool" },
  { username: "afif", password: "learning is hard process" },
];

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("whats your password?");
var signIn = function (user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry,wrong username and password");
  }
};
signIn(userNamePrompt, passwordPrompt);

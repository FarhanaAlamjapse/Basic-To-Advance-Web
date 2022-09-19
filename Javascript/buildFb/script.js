var database = [
  {
    username: "faru",
    password: "123",
  },
  {
    username: "saru",
    password: "456",
  },
  {
    username: "naru",
    password: "789",
  },
];
var newsfeed = [
  { username: "sakib", timeline: "js is cool" },
  { username: "afif", password: "learning is hard process" },
];

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  // console.log(isUserValid(user, pass));
  if (isUserValid(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("sorry,incorrect");
  }
}

// var signIn = function (user, pass) {
//   if (user === database[0].username && pass === database[0].password) {
//     console.log(newsfeed);
//   } else {
//     alert("Sorry,wrong username and password");
//   }
// };

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("whats your password?");
signIn(userNamePrompt, passwordPrompt);

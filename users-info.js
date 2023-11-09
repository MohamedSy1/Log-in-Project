//space for imports
const checkUsernameAndEmail = require("./user-checks.js");
const encryptPass = require("./encrpyt-pass.js")

users = [] //creating an empty array to add users to

const addUser = (username, email, password) => {
    user = {
       username,
       email,
       password,
    };
  return users.push(user);
};  // to be called if all conditions are met

const callAddUser = (func, func2, username, email, password) => {
  func(email, username);
  func2(password);
 if(func === true && func2 === true){
  addUser(username, email, password)
 }
}

callAddUser(checkUsernameAndEmail, encryptPass);


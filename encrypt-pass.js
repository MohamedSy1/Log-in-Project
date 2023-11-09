//place for imports
const isValidPass = require("./user-checks.js");
const {hash, compare} = require('bcrypt');
const passEncrypted = false; //going to use the function to change value if everything runs correctly 


const hashPassword = async (password, saltRounds = 8) => {
    try {
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (err) {
      return console.error(err.message);
    }
  };
  const isValidPassword = async (password, hash) => {
    try {
      const isValid = await compare(password, hash);
      return isValid;
    } catch (err) {
      return console.error(err.message);
    }
  };


const encryptPass = (password) => {
    if(isValidPass !== true){
        return "your password doesn't meet all requirements"
    } else {
        //encrypt password
        hashPassword(password);
        //change value
        passEncrypted = true;
        return password, passEncrypted;
    }
}

// tests hashes
// const test = async() => {
//     const hashedPW = await hashPassword('hello');
//     console.log(hashedPW)

//     const isValid = await isValidPassword('helo', hashedPW);
//     console.log(isValid)
// }
// test();

module.exports = {
    encryptPass,
}
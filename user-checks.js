//This page checks everything that needs to be checked
//I need to check if the username and email exist
//I need to check if the password meets requirements
//I need to check if the email meets requirements
const userNameAndEmail = false;

const emailRquirements = (email) => /^[\w.]+@[\w]+\.[\w]+$/g.test(email);




//password should have:
//8 characters long, atleast one captial, atleast one number, atleast one speacial character

const isValidPass = (password) => /[!@#$%^&*a-z]{8,}/g.test(password)

console.log(isValidPass('@Helpjdjdj'))

//check username and email
const checkUsernameAndEmail = (email, username) => {
    const emailCheck = users.find((user) => user.email === email);
    const userNameCheck = users.find((user) => user.username === username);
    
    if(!emailRquirements){
        return "invalid email."//should be replaced with red HTML text++
    } else if(emailCheck !== undefined){
        return "email already exists."//should be replaced with red HTML text
    } else if(userNameCheck !== undefined){
        return "username already exists."//should be replaced with red HTML text
    } else {
        userNameAndEmail = true;
        return userNameAndEmail;  //going to be used later in function that adds user.
    }
};

module.export = {
    isValidPass,
    checkUsernameAndEmail
}


let connection = require('../dao/connection-wrapper');
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


//========================LOGIN Functions===========================

//----Log in----
async function login(user){
    let SQL = "SELECT Id as userId, User_Type as userType, First_Name as firstName, Last_Name as lastName FROM users WHERE User_Name =? && Password =?";
    let parameters = [user.username, user.password];

    try{
        let userLoginResult = connection.executeWithParameters(SQL , parameters);
        return userLoginResult;
    }
    
    catch(error){
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }
}



//========================REGISTER Functions===========================


//----Validations - User Already Exist----
async function isUserExistByName(usename) {

    let sql = "SELECT * from users Where User_Name = ?";
    let parameters = [usename];

    try {
        let userDetails = await connection.executeWithParameters(sql, parameters);


        if(userDetails.length == 0 || userDetails == null){
            return false;

        }
            return true;
        
    }
    catch (error) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }
}

//----Add User----

async function addUser(user) {
    let sql = "INSERT INTO users (First_Name, Last_Name, User_Name, Password, User_Type)  values( ?, ?, ?, ?, 'Client')";
    let parameters = [user.firstName, user.lastName, user.username, user.password];

    try {
        await connection.executeWithParameters(sql, parameters);
    }
    catch (error) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }
}


module.exports = {login, isUserExistByName, addUser}
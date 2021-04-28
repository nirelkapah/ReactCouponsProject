let ErrorType = {
    
    GENERAL_ERROR : 
    {id: 1,
    httpCode: 600, 
    message : "Error Occured , Please Refresh The Page", 
    isShowStackTrace: true},

    USER_NAME_ALREADY_EXIST : 
    {id: 2, 
    httpCode: 601, 
    message : "User Name Already Exist", 
    isShowStackTrace: false},

    UNAUTHORIZED : 
    {id: 3, 
    httpCode: 401, 
    message : "Login Failed, Invalid User Name Or Password", 
    isShowStackTrace: false},

    INVALID_FILE_TYPE_UPLOADED : 
    {id: 4, 
    httpCode: 415, 
    message : "Invalid File Type Uploaded", 
    isShowStackTrace: false},

    UNAUTHORIZED_TOKEN : 
    {id: 5, 
    httpCode: 401, 
    message : "Unauthorized Token", 
    isShowStackTrace: false},
}

module.exports = ErrorType;
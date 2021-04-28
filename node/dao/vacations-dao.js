let connection = require("../dao/connection-wrapper");


//CLIENT FUNCTIONS
async function getFollowedVacations(userId) {

    let sql = "SELECT v.Id as id, v.Description as description, v.Destination as destination, "+ 
            "v.Image_URL as imageURL, Date_Format(v.Departure_Date, '%d/%m/%Y') as departureDate, " +
            "Date_Format(v.Return_Date, '%d/%m/%Y') as returnDate, v.Price as price, count(Vacation_Id) as followers "+
            "FROM vacations as v Left Join followedVacations as f "+
            "on v.Id = f.Vacation_Id WHERE EXISTS(select Vacation_Id, User_Id FROM followedVacations WHERE vacation_Id=f.Vacation_Id and User_Id=?) "+
            "GROUP BY id"

    //SELECT v.Id as id, v.Description as description, v.Destination as destination, v.Image_URL as imageURL, v.Departure_Date as departureDate, v.Return_Date as returnDate, v.Price as price FROM vacations as v Left Join followedVacations as f on v.Id = f.Vacation_Id where f.User_Id = 1

    let parameters = [userId];

    let followedVacationsResult = await connection.executeWithParameters(sql, parameters);
    return followedVacationsResult;
}

async function getUnFollowedVacations(userId) {

    let sql = "SELECT v.Id as id, v.Description as description, v.Destination as destination, "+ 
            "v.Image_URL as imageURL, Date_Format(v.Departure_Date, '%d/%m/%Y') as departureDate, " +
            "Date_Format(v.Return_Date, '%d/%m/%Y') as returnDate, v.Price as price, count(Vacation_Id) as followers "+
            "FROM vacations as v Left Join followedVacations as f "+
            "on v.Id = f.Vacation_Id WHERE NOT EXISTS(select Vacation_Id, User_Id FROM followedVacations WHERE vacation_Id=f.Vacation_Id and User_Id=?) "+
            "GROUP BY id"


    let parameters = [userId];

    let UnFollowedVacationsResult = await connection.executeWithParameters(sql, parameters);
    return UnFollowedVacationsResult;
}

async function addFollowedVacation(vacationId, userId) {

    let sql = "INSERT INTO followedVacations (Vacation_Id, User_Id) Values (?,?)"

    let parameters = [vacationId, userId];

    let addFollowedVacationResult = await connection.executeWithParameters(sql, parameters);
    return addFollowedVacationResult;
}

async function deleteFollowedVacation(vacationId, userId) {

    let sql = "DELETE FROM followedVacations WHERE Vacation_Id= ? && User_Id = ?"

    let parameters = [vacationId, userId];

    let deleteFollowedVacationResult = await connection.executeWithParameters(sql, parameters);
    return deleteFollowedVacationResult;
}

async function getAllVacations() {

    let sql = "SELECT v.Id as id, v.Description as description, v.Destination as destination, " + 
              "v.Image_URL as imageURL, Date_Format(v.Departure_Date, '%d/%m/%y') as departureDate, " +
              "Date_Format(v.Return_Date, '%d/%m/%y') as returnDate, v.Price as price, count(*) as followers  "+
              "FROM vacations as v Left Join followedVacations as f " + 
              "on v.Id = f.Vacation_Id GROUP BY id"

    

    let getAllVacationsResult = await connection.execute(sql);
    return getAllVacationsResult;
}



module.exports = {getFollowedVacations , getUnFollowedVacations ,addFollowedVacation, deleteFollowedVacation, getAllVacations};


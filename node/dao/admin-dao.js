let connection = require("../dao/connection-wrapper");


async function getAllVacations() {

    let sql = "SELECT v.Id as id, v.Description as description, v.Destination as destination, " + 
              "v.Image_URL as imageURL, Date_Format(v.Departure_Date, '%d/%m/%Y') as departureDate, " +
              "Date_Format(v.Return_Date, '%d/%m/%Y') as returnDate, v.Price as price, count(Vacation_Id) as followers  "+
              "FROM vacations as v Left Join followedVacations as f " + 
              "on v.Id = f.Vacation_Id GROUP BY id"
    

    let getAllVacationsResult = await connection.execute(sql);

    return getAllVacationsResult;
}


async function deleteVacationFromVacations(vacationId) {

    let sql = "DELETE FROM vacations WHERE Id=?"

    let parameters = [vacationId];

    let deleteVacationResult = await connection.executeWithParameters(sql, parameters);
    return deleteVacationResult;
}

async function deleteVacationFromFollowedVacations(vacationId) {

    let sql = "DELETE FROM followedVacations WHERE Vacation_Id=?"

    let parameters = [vacationId];

    let deleteVacationResult = await connection.executeWithParameters(sql, parameters);
    return deleteVacationResult;
}

async function editVacation(vacation) {

    let sql = 
    "UPDATE vacations "+
    "SET Destination = ?, Description = ?, Image_URL = ?, "+
    "Departure_Date = ?, Return_Date = ?, Price = ? "+
    "WHERE Id = ?"

    let parameters = [vacation.destination, vacation.description, vacation.imageURL ,
         vacation.departureDate, vacation.returnDate, vacation.price, vacation.id];

    let editVacationResult = await connection.executeWithParameters(sql, parameters);
    return editVacationResult;
}

async function addVacation(vacation) {

    let sql = "INSERT INTO vacations (Description, Destination , Image_URL , Departure_Date ,Return_Date , Price)  values( ?, ?, ?, ?, ?, ?)";
    let parameters = [vacation.description, vacation.destination, vacation.imageURL ,
        vacation.departureDate, vacation.returnDate, vacation.price];

    try {
        let addVacationResult = await connection.executeWithParameters(sql, parameters);
        return addVacationResult;
    }
    catch (error) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, error);
    }
}



module.exports = {getAllVacations, deleteVacationFromVacations, editVacation, addVacation , deleteVacationFromFollowedVacations};


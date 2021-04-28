let adminDao = require('../dao/admin-dao');


async function getAllVacations(){
    
    let getAllVacationsresult = await adminDao.getAllVacations()
    return (getAllVacationsresult)
}

  
async function deleteVacation(req){

    let vacationId = req.body.vacationId;

    let deleteVacationResult1 = await adminDao.deleteVacationFromVacations (vacationId)
    let deleteVacationResult2 = await adminDao.deleteVacationFromFollowedVacations (vacationId)

    deleteVacationResult = []
    deleteVacationResult.push(deleteVacationResult1)
    deleteVacationResult.push(deleteVacationResult2)


    return deleteVacationResult;
}

async function editVacation(req){

    let vacation = req.body;

    let editVacationResult = await adminDao.editVacation (vacation)
    return editVacationResult;
}

async function addVacation(req){

    let vacation = req.body;

    let addVacationResult = await adminDao.addVacation (vacation)
    return addVacationResult;
}


module.exports = {
getAllVacations,
deleteVacation,
editVacation,
addVacation
};

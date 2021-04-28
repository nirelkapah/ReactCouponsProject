let vacationsDao = require('../dao/vacations-dao');
let serverCache = require('../models/serverCache');


async function getFollowedVacations(req){

    let user = extractUserFromCache(req);
    let userId = user.userId;

    let followedVacationsResult = await vacationsDao.getFollowedVacations (userId)
    return (followedVacationsResult)
}
    
async function getUnFollowedVacations(req){
    
    let user = extractUserFromCache(req);
    let userId = user.userId;

    let UnFollowedVacationsResult = await vacationsDao.getUnFollowedVacations (userId)
    return (UnFollowedVacationsResult)
}

    
async function addFollowedVacation(req){
    
    let vacationId = req.body.vacationId;
    let userCacheInfo = extractUserFromCache(req);
    let userId = userCacheInfo.userId


    let followedVacationResult = await vacationsDao.addFollowedVacation (vacationId, userId)
    return (followedVacationResult)
}

    
async function deleteFollowedVacation(req){

    let vacationId = req.body.vacationId;
    let userCacheInfo = extractUserFromCache(req);
    let userId = userCacheInfo.userId

    let deleteFollowedVacationResult = await vacationsDao.deleteFollowedVacation (vacationId, userId)
    return (deleteFollowedVacationResult)
}

async function getAllVacations(){
    
    let getAllVacationsresult = await vacationsDao.getAllVacations()
    return (getAllVacationsresult)
}


const extractUserFromCache = (req) => {
    let authorizationString = req.headers['authorization'];
    let token = authorizationString.substring('Bearer '.length);
    let userCacheData = serverCache.get(token);

    return userCacheData;
}




module.exports = {
getFollowedVacations,
getUnFollowedVacations,
addFollowedVacation,
deleteFollowedVacation,
getAllVacations
};

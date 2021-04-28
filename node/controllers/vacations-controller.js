const express = require('express')
const vacationsLogic = require('../logic/vacations-logic')
const router = express.Router()

// get Followed Vacations By User Id
router.get("/followedVacations", async (req, res, next) => {

    try {
        let followedVacationsResult = await vacationsLogic.getFollowedVacations(req);
        res.json(followedVacationsResult);
    }
    catch (error) {
        // console.log(error);
        return next(error);
    }

});

// get UnFollowed Vacations By User Id
router.get("/unFollowedVacations", async (req, res, next) => {

    try {
        let UnFollowedVacationsResult = await vacationsLogic.getUnFollowedVacations(req);
        res.json(UnFollowedVacationsResult);
    }
    catch (error) {
        console.log(error);
        return next(error);
    }
});

// Add Followed Vacation
router.post("/addFollowedVacation", async (req, res, next) => {

    try {
        let addfollowedVacationsResult = await vacationsLogic.addFollowedVacation(req);
        res.json(addfollowedVacationsResult);
    }
    catch (error) {
        console.log(error);
        return next(error);
    }

});


// Delete Followed Vacation
router.post("/deleteFollowedVacation", async (req, res, next) => {

    try {
        let deletefollowedVacationsResult = await vacationsLogic.deleteFollowedVacation(req);
        res.json(deletefollowedVacationsResult);
    }
    catch (error) {
        console.log(error);
        return next(error);
    }

});

// get All Vacations
router.get("/allVacations", async (req, res, next) => {

    try {
        let getAllVacationsResult = await vacationsLogic.getAllVacations();
        res.json(getAllVacationsResult);
    }
    catch (error) {
        console.log(error);
        return next(error);
    }

});

module.exports = router;




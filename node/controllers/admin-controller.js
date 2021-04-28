const express = require('express')
const adminLogic = require('../logic/admin-logic')
const router = express.Router()

// get All Vacations
router.get("/allVacations", async (req, res, next) => {

    try {
        let getAllVacationsResult = await adminLogic.getAllVacations();
        res.json(getAllVacationsResult);
    }
    catch (error) {
        return next(error);
    }

});


// Delete Vacation
router.post("/deleteVacation", async (req, res, next) => {

    try {
        let deleteVacationResult = await adminLogic.deleteVacation(req);
        res.json(deleteVacationResult);
    }
    catch (error) {
        return next(error);
    }

});

// edit Vacation
router.put("/editVacation", async (req, res, next) => {

    try {

        let editVacationResult = await adminLogic.editVacation(req);
        res.json(editVacationResult);
    }
    catch (error) {
        return next(error);
    }

});

// edit Vacation
router.post("/addVacation", async (req, res, next) => {

    try {

        let addVacationResult = await adminLogic.addVacation(req);
        res.json(addVacationResult);
    }
    catch (error) {
        // console.log(error);
        return next(error);
    }

});

module.exports = router;




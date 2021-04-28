const express = require('express');
const usersLogic = require('../logic/users-logic');


const router = express.Router()

router.post('/login', async (req, res, next) => {
    let user = req.body;

    try{
        let succesfulLoginData = await usersLogic.login(user);
        res.json(succesfulLoginData);
    }
    catch(error){
        return next(error);
    }
})

// ADD USER
router.post("/register", async (req, res, next) => {

    // Extracting the JSON from the packet's BODY
    let userId = req.body;

    try {
        let succesfulLoginData = await usersLogic.addUser(userId);
        res.json(succesfulLoginData);
    }
    catch (error) {
        // console.log(error);
        return next(error);
    }
});

// Authenticate USER
router.post('/authenticate', async (req, res, next) => {
    //let token = req.body;

    try{
        let succesfulAuthenticateData = await usersLogic.authenticate(req);
        res.json(succesfulAuthenticateData);
    }
    catch(error){
        return next(error);
    }
})

module.exports = router;




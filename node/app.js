//=====================import=====================//
const express = require("express");
const server = express();


//----------cors---------//
const cors = require('cors');

//----------middlewares------//
const errorHandler = require("../node/errors/error-handler");
const loginFilter = require('../node/middleware/login-filter');


//----------multer - file upload ------//
const uploadHandler = require('../node/utls/upload-handler')

//----------controllers---------//
const usersController = require('../node/controllers/users-controller');
const vacationsController = require('./controllers/vacations-controller');
const adminController = require('./controllers/admin-controller');

//----------socket IO-----------//
const handleSocketsIO = require('../node/socket-io/socketIO-handler');


//===============================ON SERVER START =============================

//set a public static Folder - for file uploads
server.use(express.static('./public'))

//Use Cors
server.use(cors({ origin: "http://localhost:3000", credentials: true
}));

//Use Login Filter
server.use(loginFilter());

//Use JSON On Data
server.use(express.json());

//Listen On Port
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log('Listening on ' + PORT));


//===============================On Post Data ( data / admin / vacations) =============================//

server.use('/upload',uploadHandler);

server.use('/users',usersController);
server.use('/vacations',vacationsController);
server.use('/admin',adminController);


server.use(errorHandler);

//===============================Register Socket IO =============================//

handleSocketsIO(server);


function handleSocketsIO(server) {

    //----------connect to modules------
    const http = require('http').createServer(server);
    const io = require('socket.io')(http);
    const serverCache = require('../models/serverCache');

     //----------get User Id------

    
    const extractUserFromCache = (handshakeData) => {
    let token = handshakeData._query['token'];
    let userCacheData = serverCache.get(token);

    return userCacheData;
}


    //----------cache------
    const usersIdSocketMap = require('../models/usersIdSocketMap');

    io.on('connection', (socket) => {

        console.log("Socket Connected");

        //Get User Id From Cache Using Token
        let handshakeData = socket.request;
        let userData = extractUserFromCache(handshakeData)
        let userId;
        if(userData){
            userId = userData.userId;
        }

        console.log("USERID:");
        console.log(userId);

        usersIdSocketMap.set(userId, socket);
        console.log("user id " + userId + " is now connected. Total clients online: " + usersIdSocketMap.size);



        socket.on('add-vacation', (addedVacation) => {
            console.log("socketIO emitting addVacation");
            socket.broadcast.emit('add-vacation', (addedVacation));
        });

        socket.on('update-vacation-info', (updatedVacationData) => {
            console.log("socketIO emitting updateVacation");
            socket.broadcast.emit('update-vacation-info', (updatedVacationData));
        });

        socket.on('delete-vacation', (vacationId) => {
            console.log("socketIO emitting delete-vacation");
            socket.broadcast.emit('delete-vacation', (vacationId));
        });

        socket.on('increase-vacation-followers', (vacationId) => {
            console.log("socketIO emitting increaseFollowers");
            io.emit('increase-vacation-followers', (vacationId));
        });

        socket.on('decrease-vacation-followers', (vacationId) => {
            console.log("socketIO emitting decreaseVacation");
            io.emit('decrease-vacation-followers', (vacationId));
        });

        socket.on('disconnect', () => {
            let handshakeData = socket.request;

            //Get User Id From Cache Using Token
            let userData = extractUserFromCache(handshakeData)
            let userId;
            if(userData){
            userId = userData.userId;
            }

            usersIdSocketMap.delete(userId);
            console.log( "client "+ userId +" has diconnected. totalClient:" + usersIdSocketMap.size);
        })

    });

    http.listen(3002, () => {
        console.log('socket is listening to port 3002');
    });
    

}

module.exports = handleSocketsIO;
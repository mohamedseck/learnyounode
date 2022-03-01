'use strict' ;
const net = require('net') ;

// The net module has a method named net.createServer() that takes a function. The function that you need to pass to net.createServer() is a connection listener that is called more than once. Every connection received by your server triggers another call to the listener.
const server = net.createServer(listener) ;

server.listen(process.argv[2]) ;

// The listener function has the signature: function listener (socket) { /* ... */ }  
function listener (socket) {
    var date = new Date() ;

    // month
    var month = date.getMonth() + 1 ;
    if (month < 10) {
        month = '0' + month ;
    } ;

    // day
    var day = date.getDate() ;
    if (day < 10) {
        day = '0' + day ;
    } ;

    // hours
    var hours = date.getHours() ;
    if (hours < 10) {
        hours = '0' + hours ;
    } ;

    // minute
    var minutes = date.getMinutes() ;
    if (minutes < 10) {
        minutes = '0' + minutes ;
    }

    var data = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n' ;
    socket.end(data);
} ;
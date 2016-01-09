var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/chat';

module.exports = function(){
    mongoose.connect(url);
    var db = mongoose.connection;

    db.once('open', function(err){
        if (err){
            console.log('Error: ' + err);
        }

        console.log('MongoDb running...');
    });

    db.on('error', function(err){
        console.log(err);
    });

    require('../models/User').init();
    require('../models/Message').init();
};
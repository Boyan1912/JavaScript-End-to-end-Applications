var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message = mongoose.model('Message');

module.exports = {
    registerUser : function(user){
        if(!(user instanceof Object)){
            console.log('User must be an object!');
            return;
        }
        var newUser = new User(user);
        newUser.save({validateBeforeSave: true}, function(err, user){
            if(err){
                console.log('Unsuccessful registration: ' + err);
            }else{
                console.log(user.user + ' registered in database!');
            }
        })
    },

    sendMessage : function(message){
        if(!(message instanceof Object)){
            console.log('Message must be an object!');
            return;
        }
        var newMessage = new Message(message);

        newMessage.save(function(err, message){
            if(err){
                console.log('Message from ' + newMessage.from + ' not saved: ' + err);
            }else{
                console.log('Message from ' + message.from + ' to ' + message.to + ' saved to database!');
            }
        })
    },

    getMessages : function(userNames){
        if(!(userNames instanceof Object)){
            console.log('User names parameters must be in an object!');
            return;
        }

        Message.find({$or:[{
            $and:
            [{from : userNames.with}, {to : userNames.and}]}, {
            $and:
            [{from : userNames.and}, {to : userNames.with}]}
        ]}).
            select('from to text date -_id').
            exec(function(err, result){
                if(err){
                    console.log(err);
                }else{
                    var message = result.length > 0 ? 'RESULTS: ' + result : 'No messages between these users!';
                    console.log(message);
                }
            })
    }
};



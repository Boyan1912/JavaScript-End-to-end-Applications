var mongoose = require('mongoose');
var User = mongoose.model('User');
var userSchema = User.schema;

module.exports = {
    init: function(){
        var messageSchema = new mongoose.Schema({
          from: {type: String, ref: User, required: true},
          to: {type: String, ref: User, required: true},
          text: String,
            date: {type: Date, default: new Date()}
        });

        messageSchema.pre('save', function(next){
            var from = this.from,
                to = this.to;

            function checkIfUserRegistered(name){
                User.findOne({user: name}, function(err, result){
                    var msg = !!result ? 'OK' : new Error('Both users must be registered to send or receive' +
                        ' messages! ; User ' + name + ' not in DB!');
                    if(!result || name === to){
                        next(msg);
                    }
                });
            }

            checkIfUserRegistered(from);
            checkIfUserRegistered(to);
        });

        var Message = mongoose.model('Message', messageSchema);
    }
};




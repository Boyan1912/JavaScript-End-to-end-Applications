var mongoose = require('mongoose');

module.exports = {
    init: function(){
        var userSchema = new mongoose.Schema({
            user: {type: String, required: true},
            pass: {type: String, required: true}
        });

        var User = mongoose.model('User', userSchema);
    }
};
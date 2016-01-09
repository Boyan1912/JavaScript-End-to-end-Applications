require('./config/mongoose')();

//MondoDB and Mongoose Homework
//
//Create a modules for Chat, that keep the data into a local MongoDB instance
//
//The module should have the following functionality:

    var chatDb = require('./chat-db');
//inserts a new user records into the DB
chatDb.registerUser({user: 'DonchoMinkov', pass: '123456q'});
chatDb.registerUser({user: 'az', pass: '123456q'});
chatDb.registerUser({user: 'toi', pass: '123456q'});
chatDb.registerUser({user: 'tq', pass: '123456q'});
chatDb.registerUser({user: 'mene', pass: '123456q'});
chatDb.registerUser({user: 'tebe', pass: '123456q'});
chatDb.registerUser({user: 'onea', pass: '123456q'});
chatDb.registerUser({user: 35, pass: 50});
//inserts a new message record into the DB
//the message has two references to users (from and to)
chatDb.sendMessage({
    from: 'DonchoMinkov',
    to: 'NikolayKostov',
    text: 'Hey, Niki!'
});
chatDb.sendMessage({
    from: 'mene',
    to: 'tebe',
    text: 'kvo staa!'
});
chatDb.sendMessage({
    from: 30,
    to: {},
    text: 'a!'
});
chatDb.sendMessage({
    from: 'unregistered',
    to: '',
    text: 'aha'
});
chatDb.sendMessage({
    from: 'ggg',
    to: 'aaaa',
    text: 'aha'
});
chatDb.sendMessage({
    from: 'toi',
    to: 'tq',
    text: '999'
});
chatDb.sendMessage({
    from: 'az',
    to: 'PPPPPPPPPPPPPPPPP',
    text: 'TESTETSTSTS'
});
////returns an array with all messages between two users
chatDb.getMessages({
    with: 'tq',
    and: 'toi'
});
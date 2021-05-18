const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const JokeShema = new mongoose.Schema({
    setup:{
        type: String,
        require: [true, "You need to setup your joke"],
        minlength: [10, "Your joke needs to be longer to make sense"]
    },
    punchline: {
        type: String,
        require: [true, "And... the Punch Line is???"],
        minlength: [3, "Fail at joke"]
    }
});

const Joke = mongoose.model('Joke', JokeShema);


module.exports = Joke;
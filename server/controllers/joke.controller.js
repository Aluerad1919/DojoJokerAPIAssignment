const Joke = require('../models/joke.model');

//Read all
module.exports.findAllJokes=(req,res) => {
    Joke.find()
        .then(alljokes => res.json({jokes: alljokes}))
        .catch(err => res.json({message: " You Suck at jokes", error: err}))
}

// read one
module.exports.findOneJoke=(req,res) => {
    Joke.findOne({_id: req.params._id})
        .then(onejoke => res.json({joke: onejoke}))
        .catch(err => res.json({message: " You Suck at jokes", error: err}))
}

// create 
module.exports.createJoke = (req,res) =>{
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.status(400).json(err));
}

//update
module.exports.updateJoke = (req,res) =>{
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteJoke=(req,res)=>{
    Joke.remove({_id: req.params._id})
        .then(delJoke => res.json({message:"Delete the joke"}))
        .catch(err => res.json({message: " You Suck at jokes", error: err}))
}

//read random joke
module.exports.findRandom = (req, res) => {
    Joke.find()
        .then(jokes => {
            let rand = Math.floor(Math.random()*jokes.length);
            res.json({joke: jokes[rand]});
        })
        .catch(err => res.json({message: " You Suck at jokes", error: err}))
}
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/jokes_api_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(()=> console.log('Found!!!Rog, money!!!'))
 .catch(()=> console.log('Lost!?!?!', err))
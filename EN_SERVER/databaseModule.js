const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webbserver1', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

    console.log("I'm in!")
});

const messagePostSchema = new mongoose.Schema({
    name: String,
    message: String
});

const messagePost = mongoose.model('messagePost', messagePostSchema);

exports.SaveData = function (inName, InMessage) {
    let newMessagePost = new messagePost({
        name: inName,
        message: InMessage
    })
    
    newMessagePost.save() 
}

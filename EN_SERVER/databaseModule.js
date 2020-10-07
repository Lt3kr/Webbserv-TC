const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webbserver1', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

    console.log("I'm in!")
    // we're connected!
});

const messagePostSchema = new mongoose.Schema({
    name: String,
    message: String
});

const messagePost = mongoose.model('messagePost', messagePostSchema);

let newMessagePost = new messagePost({
    name: "Liam",
    message:"tjena"
})

newMessagePost.save()
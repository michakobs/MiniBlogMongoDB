const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniBlog', {useNewUrlParser: true, useUnifiedTopology: true});

const Post = require('./Post')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo connected');
  // we're connected!
});

// Post.insertMany(
//     [{ 
//     title: 'Test Title',
//     content: 'Das ist ein Test.'
//     }], (err) => {
//     console.log('Error' + err)
// });

//oder
let postsData = [
    {
        title: "Test Title1",
        content: "Das ist Test1."
    },
    {
        title: "Test Title2",
        content: "Das ist Test2."
    }];

(async() => {
    const createdPosts = await Post.insertMany(postsData)
    console.log(createdPosts)
})();



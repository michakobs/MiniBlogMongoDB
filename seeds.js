require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk')

//muss ans Projekt angepasst werden
mongoose.connect(process.env.MONGODBPATH, {useNewUrlParser: true, useUnifiedTopology: true});

const Post = require('./Post')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(chalk.green('Mongo connected'));
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
    

    if(process.argv.includes('--delete')){
        await Post.deleteMany();
        console.log(chalk.red.bold.inverse('Posts deleted!'))
    } else {
        let postsFound = await Post.find()
            if(postsFound.length > 0){
                    console.log(chalk.green.bold.inverse('Data found'))
            } else {
            await Post.insertMany(postsData);
                    console.log(chalk.yellow.bold.inverse('Posts created'))
        }  
        }
    process.exit()
})();



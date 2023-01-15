const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/TODO', (err) => {
    if (err) {
        console.log('Opps.. Something went wrong while connecting to MONGODB..!');
        console.log(JSON.stringify(err));
    } else {
        console.log('Connected to MONGODB...!');
    }
})

module.exports = mongoose;
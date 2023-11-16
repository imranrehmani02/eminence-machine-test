const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/eminence';

mongoose.connect(db_url,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    })
    .then((link)=>console.log('Database Connected'))
    .catch(()=>console.log('Database not connected'))

const db = mongoose.connection;
module.exports = db;

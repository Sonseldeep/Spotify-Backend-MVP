require('dotenv').config();
const mongoose = require('mongoose');

async function connectDb() {

    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully');
    }

    catch(e) {
        
        console.error('Error connecting to MongoDB:', e);
    }
}

module.exports = connectDb;
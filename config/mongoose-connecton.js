require('dotenv').config();

const mongoose =require('mongoose');

const DATABASE_URL =process.env.MONGO_URL;

mongoose.connect(DATABASE_URL)
.then(() => console.log('Database connected!'))
.catch(err => console.error('Database connection error:', err)
);

module.exports =mongoose.connection;
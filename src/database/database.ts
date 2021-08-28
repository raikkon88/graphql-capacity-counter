import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.DATABASE_URL || '', {
    dbName: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    pass: process.env.DATABASE_PASSWORD,
    autoIndex: true,
    useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection;

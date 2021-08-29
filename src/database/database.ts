import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

let client: MongoClient;

export const getConnection = () => {
    if (!client) {
        client = new MongoClient(process.env.DATABASE_URL || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        client.connect();
    }
    return client;
};

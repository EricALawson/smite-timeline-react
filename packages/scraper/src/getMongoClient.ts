import * as dotenv from 'dotenv';
import { Db, MongoClient } from 'mongodb';

let mongoClient: MongoClient;
dotenv.config({path: `./config.env`});

export async function connectToMongodb() {
    console.log(` connecting to ${process.env.MONGO_DB_NAME} on mongoDB`)
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@smite-timeline-0.n3o8x.mongodb.net/?retryWrites=true&w=majority`;
    mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db(process.env.MONGO_DB_NAME);
        console.log(`connection to ${process.env.MONGO_DB_NAME} successful`)
        return db;
    } catch (err) {
        console.log(err);
        throw err;
    }
    //unreachable
}

const smiteTimelineDatabase =  async () => connectToMongodb();

export {smiteTimelineDatabase};

export {mongoClient};
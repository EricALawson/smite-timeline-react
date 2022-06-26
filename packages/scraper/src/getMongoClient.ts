import 'dotenv/config'
import { Db, MongoClient } from 'mongodb';

let mongoClient: MongoClient;

async function connectToMongodb() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@smite-timeline-0.n3o8x.mongodb.net/?retryWrites=true&w=majority`;
    mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db(process.env.MONGO_DB_NAME);
        return db;
    } catch (err) {
        console.log(err);
        throw err;
    }
    //unreachable
}

const smiteTimelineDatabase = connectToMongodb();

export {smiteTimelineDatabase};

export {mongoClient};
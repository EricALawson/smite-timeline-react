import { Db, MongoClient } from "mongodb";


let dbConnection: Db | null;

export const getDB = async () => {
    if(dbConnection === null) {
        await connectToDatabase();
    }
    if (dbConnection === null) {
        throw new Error("connection to database failed, dbConnection is still null")
    }
    return dbConnection
}

export const connectToDatabase = async () => {
    const uri = process.env.ATLAS_URI
    const database = process.env.DATABASE_NAME
    if (uri === undefined || database === undefined) {
        throw new Error("Mongodb Atlas URI was undefined when attempting to connect.");
    }
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db(database);
        dbConnection = db;
    } catch (err) {
        client.close();
        throw err;
    }
}
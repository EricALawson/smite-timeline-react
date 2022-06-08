import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { recordRoutes } from "./routes/recordRoutes";
import { connectToDatabase } from "./database/connection";

config({path: "./config.env"});

const PORT = process.env.PORT || 5000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(recordRoutes);

connectToDatabase();

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
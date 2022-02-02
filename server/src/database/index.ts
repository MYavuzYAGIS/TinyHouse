require('dotenv').config();
import {MongoClient} from "mongodb";
import {Database,User} from "../lib/types";

const url =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



export const connectDatabase = async () :Promise<Database> => {
    const client = await MongoClient.connect(url);
    const db = client.db("main");
    return {
        listings: db.collection("test_listings"),
        users: db.collection<User>("test_users")
    };
};


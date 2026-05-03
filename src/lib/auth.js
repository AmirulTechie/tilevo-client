import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4'])


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGO_URI;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

const connectedClient = await clientPromise;
const db = connectedClient.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, { client: connectedClient }),
    emailAndPassword: {
        enabled: true,
    }
});
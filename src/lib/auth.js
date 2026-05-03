import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export const auth = betterAuth({
    database: mongodbAdapter(client.db("tilevo-database"), { client }),
    emailAndPassword: {
        enabled: true,
    }
});
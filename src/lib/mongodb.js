import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error("MONGO_URI is missing from .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect()
            .then(c => { console.log("✅ MongoDB connected"); return c; })
            .catch(e => { console.error("❌ MongoDB connection failed:", e.message); throw e; });
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export { client };
export default clientPromise;
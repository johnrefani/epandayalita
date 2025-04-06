import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string;
let client: MongoClient;
let db: Db;

if (!uri) {
  throw new Error("Environment Error");
}

async function connectToDatabase() {
  if (db) return db;

  client = new MongoClient(uri);
  await client.connect();
  db = client.db("epandayalita_db");
  console.log("Connected to MongoDB");
  return db;
}

export default connectToDatabase;
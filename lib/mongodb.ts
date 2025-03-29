import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('epandayalita_db');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
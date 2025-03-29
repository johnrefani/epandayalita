import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { word } = req.query;

  if (!word || typeof word !== 'string') {
    return res.status(400).json({ error: 'Invalid word parameter' });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection('entries');
    const entry = await collection.findOne({ word: word.toLowerCase() });

    if (!entry) {
      return res.status(404).json({ error: 'Word not found' });
    }

    return res.status(200).json({
      word: entry.word,
      definition: entry.definition,
      pronunciation: entry.pronunciation,
      speech: entry.speech,
      image: entry.imageUrl || null,
      audio: entry.audioUrl || null,
      category: entry.category,
    });
  } catch (error) {
    console.error('Error fetching entry:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
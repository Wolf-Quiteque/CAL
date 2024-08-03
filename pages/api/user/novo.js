// pages/api/some-api-route.js
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const data = req.body;
  try {
    const client = await clientPromise;
    const db = client.db('Cal');

    const collection = db.collection('users');
    const documents = await collection.insertOne(data);

    res.status(200).json(documents);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An error occurred' });
  }
}

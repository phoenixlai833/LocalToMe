// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from '../../../server/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET requests
  } else if (req.method === 'POST') {
    // Handle POST requests
    const newsId = await db.addNews(req.body)
    res.status(200).json(newsId);
  } else if (req.method === 'PUT') {
    // Handle PUT requests
    console.log(req.body)
    const newsId = await db.editNews(req.body)
    res.status(200).json(newsId);
  } else if (req.method === 'DELETE') {
    // Handle DELETE requests
  }
}

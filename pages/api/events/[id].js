// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../../server/database";
const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY);

export default async function handler(req, res) {
    
  if (req.method === "GET") {
    // Handle GET requests
        const event = await db.getEvents();
        // res.status(200).json(events);
  } else if (req.method === "POST") {
    // Handle POST requests
  } else if (req.method === "PUT") {
    // Handle PUT requests
  } else if (req.method === "DELETE") {
    // Handle DELETE requests
  }
}

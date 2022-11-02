// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../../server/database";
import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY_ADMIN
);

const index = client.initIndex("prod_EVENTS");

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET requests
    const event = await db.getEvent(+req.params.id);
    res.status(200).json(event);
  } else if (req.method === "POST") {
    // Handle POST requests
  } else if (req.method === "PUT") {
    // Handle PUT requests
  } else if (req.method === "DELETE") {
    // Handle DELETE requests
    await db.deleteEvent(+req.params.id);
    index.deleteObject(req.params.id);
    res.sendStatus(200);
  }
}

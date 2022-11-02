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
    const events = await db.getEvents();
    res.status(200).json(events);
  } else if (req.method === "POST") {
    // Handle POST requests
    console.log('this', req.body);
    return;
    const eventRef = await db.addEvent(req.body);
    const event = await db.getEvent(eventRef.id);
    index.saveObject({...event, objectID: event.id}).wait()
    res.status(200).json(event.id);
  }
}

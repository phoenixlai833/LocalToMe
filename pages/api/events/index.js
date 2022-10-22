// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../../server/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET requests
        const events = await db.getEvents();
        res.status(200).json(events);
  } else if (req.method === "POST") {
    // Handle POST requests
    const eventId = await db.addEvent(req.body)
    res.status(200).json(eventId);
  }
}

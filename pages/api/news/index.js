// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../../server/database";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "..[...nextauth]";



export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (req.method === "GET") {
    // Handle GET requests
  } else if (req.method === "POST") {
    // Handle POST requests
    if (!session) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    
    const newsId = await db.addNews(req.body);

    res.status(200).json(newsId);
  } else if (req.method === "PUT") {
    // Handle PUT requests
    console.log(req.body);
    const newsId = await db.editNews(req.body);
    res.status(200).json(newsId);
  } else if (req.method === "DELETE") {
    // Handle DELETE requests
  }
}

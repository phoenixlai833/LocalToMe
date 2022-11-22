// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from '../../../server/database';

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth].js";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET requests
    const foodbanks = await db.getFoodBanks();
    res.status(200).json(foodbanks);
  } else if (req.method === 'POST') {
    // Handle POST requests

  } else if (req.method === 'PUT') {
    // Handle PUT requests
  } else if (req.method === 'DELETE') {
    // Handle DELETE requests
  }
}

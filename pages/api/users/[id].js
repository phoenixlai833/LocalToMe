// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../../server/database";

export default async function handler(req, res) {
    if (req.method === "GET") {
        // Handle GET requests
        const id = req.query.id;
        const user = await db.getUser(id);
        res.status(200).json(user);

        //user.favorite.events
        //user.favorite.locations
    } else if (req.method === 'PUT') {
        // Handle PUT requests
        const id = req.query.id;
        const userUpdates = { ...req.body, id: id }
        // console.log(user)
        const user = await db.editUser(userUpdates)
        res.status(200).json(user);
    }

}
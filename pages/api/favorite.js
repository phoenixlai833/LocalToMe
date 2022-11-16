// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as db from "../../server/database";

export default async function handler(req, res) {
    if (req.method === "PUT") {

        // Handle POST requests
        const userId = req.body.userId;
        const type = req.body.type;
        const itemId = req.body.itemId;
        const favorite = req.body.favorite

        if (!favorite) {
            const user = await db.addFavorite(userId, type, itemId);
            res.status(200).json({ message: "added to fav", user });
            return;
        } else {
            const user = await db.deleteFavorite(userId, type, itemId);
            res.status(200).json({ message: "delete from fav", user });
        }
    }
}
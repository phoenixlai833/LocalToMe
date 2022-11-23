import axios from "axios";

export default async function postFavorite(favorite, type, userId, itemId) {
    return axios.put('/api/favorite', {
        favorite,
        type,
        userId,
        itemId,
    })
}
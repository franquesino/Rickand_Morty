import { addFavorite, deleteFavorite } from "./action-types";

export const addFavorite = (character) => {
    return { type: addFavorite, payload: character }
}

export const deleteFavorite = (id) => {
    return { type: deleteFavorite, payload: id }
}
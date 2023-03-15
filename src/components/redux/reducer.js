import { addFavorite,deleteFavorite } from "./action-types";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case addFavorite:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case deleteFavorite:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !==
                    action.payload)
            }    

        default:
            return {...state}
    }
}

export default reducer;
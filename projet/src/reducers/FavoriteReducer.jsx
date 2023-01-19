const initialState = {
    favorites: [],
}

const FavoriteReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "ADD_FAVORIS":
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
            }
        case "DELETE_FAVORIS":
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite !== action.payload.fav),
            }
        default: 
                return state    
    }
}

export default FavoriteReducer
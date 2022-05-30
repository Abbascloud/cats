import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_CATS_START,
  GET_CATS_SUCSESS,
  GET_CATS_ERROR,
} from "./types";

const initialState = {
  cats: [],
  favorites: [],
  catsLoading: false,
  catsError: null,
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS_START:
      return {
        ...state,
        catsLoading: true,
        catsError: null,
      };

    case GET_CATS_SUCSESS:
      return {
        ...state,
        catsLoading: false,
        cats: action.payload,
      };

    case GET_CATS_ERROR:
      return { ...state, catsLoading: false, catsError: action.payload };

    case ADD_TO_FAVORITES: {
      if (state.favorites.find((catCard) => catCard.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [
          ...state.favorites,
          { id: action.payload.id, url: action.payload.url, like: true },
        ],
        cats: state.cats.map((catCard) => {
          return catCard.id === action.payload.id
            ? { ...catCard, like: !catCard.like }
            : catCard;
        }),
      };
    }

    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (catCard) => catCard.id !== action.payload.id
        ),
        cats: state.cats.map((catCard) => {
          return catCard.id === action.payload.id
            ? { ...catCard, like: !catCard.like }
            : catCard;
        }),
      };
    }

    default:
      return state;
  }
};

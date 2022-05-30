import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_CATS_START,
  GET_CATS_SUCSESS,
  GET_CATS_ERROR,
} from "./types";

export const getCats = () => ({
  type: GET_CATS_START,
});

export const getCatsSucsess = (cats) => ({
  type: GET_CATS_SUCSESS,
  payload: cats,
});

export const getCatsError = (error) => ({
  type: GET_CATS_ERROR,
  payload: error,
});

export const addToFavorites = (catObj) => {
  return { type: ADD_TO_FAVORITES, payload: catObj };
};
export const removeFromFavorites = (id) => {
  return { type: REMOVE_FROM_FAVORITES, payload: id };
};

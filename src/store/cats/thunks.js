import {
  getCats,
  getCatsSucsess,
  getCatsError,
  getMoreCatsSucsess,
} from "./actions";

export const getCatsStart =
  (page = 1, limit = 15) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getCats());
      const { data } = await api.getCats(page, limit);
      dispatch(getCatsSucsess(data));
    } catch (e) {
      dispatch(getCatsError(e));
    }
  };

export const getMoreCatsOnCick =
  (page, limit = 10) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getCats());
      const { data } = await api.getCats(page, limit);
      dispatch(getMoreCatsSucsess(data));
    } catch (e) {
      dispatch(getCatsError(e));
    }
  };

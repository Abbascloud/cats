import { getCats, getCatsSucsess, getCatsError } from "./actions";

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

import { request } from "../request";

export const getCats = (page = 0, limits = 15) =>
  request.get(`/v1/images/search?limit=${limits}&page=${page}`);

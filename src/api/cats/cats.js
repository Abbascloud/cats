import { request } from "../request";

export const getCats = (page, limits) =>
  request.get(`/v1/images/search?limit=${limits}&page=${page}&order=desc`);

import axios from "axios";

class Request {
  constructor() {
    this.request = axios.create({
      baseURL: "https://api.thecatapi.com",
    });
  }

  get = (url) => {
    return this.request.get(url);
  };
  post = (url, params) => {
    return this.request.post(url, params);
  };
}

export const request = new Request();

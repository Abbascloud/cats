import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Provider } from "react-redux";
import { storegi } from "./store/createStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Landing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/Routing";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

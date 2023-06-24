import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/Modal";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);

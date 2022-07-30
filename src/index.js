import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
  }
  input {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  
  form button {
    padding: 10px 40px;
    background: lightseagreen;
    color: white;
    border: none;
    display: table;
    margin: 0 auto;
  }
`;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

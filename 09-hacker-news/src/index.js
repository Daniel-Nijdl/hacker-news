import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css"
import {ArticleProvider} from './util/context'


ReactDOM.render(
  <React.StrictMode>
    <ArticleProvider>
    <App />
    </ArticleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



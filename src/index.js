import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./utils/redux/reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
// import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

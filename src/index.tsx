import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { rootReducer as reducer } from './reduxGlobal';
import { MainRouter } from './router/MainRouter';

const composeReduxMiddlewares = () => {
  return compose(applyMiddleware(reduxThunk));
};

const store = createStore(reducer, composeReduxMiddlewares());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

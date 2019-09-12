import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/mdmmSaga';
import persistReducer, { history } from './redux/reducers/index';
import confirmMiddleware from './redux/common/middleware/confirm';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, thunk, confirmMiddleware, sagaMiddleware];

const store = createStore(
  persistReducer,
  compose(
    applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    // TODO: <question> disable以外の方法はあるか？
    /* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  ),
);
const pstore = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={<p>loading...</p>} persistor={pstore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

export default pstore;

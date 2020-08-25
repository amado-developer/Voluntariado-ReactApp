import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from '../redux/reducers';
import mainSaga from '../redux/sagas';


export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: [],
    },
    reducer,
  );

  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )(createStore)(persistedReducer);

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return { store, persistor };
}
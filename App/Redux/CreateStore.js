import Config from '../Config/DebugConfig';
import createSagaMiddleware from 'redux-saga';
import Rehydration from '../Services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import Reactotron from '../Config/ReactotronConfig';
import TronConnector from 'reactotron-react-native';
import {applyMiddleware, compose, createStore} from 'redux';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? TronConnector.createSagaMonitor()
    : null;

  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const allEnhancers = Config.useReactotron
    ? compose(...enhancers, Reactotron.createEnhancer())
    : compose(...enhancers);

  const store = createStore(rootReducer, allEnhancers);

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

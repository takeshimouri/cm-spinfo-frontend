import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducerMdmms from './reducerMdmms';
import reducerAclgs from './reducerAclgs';

export const history = createBrowserHistory();

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['mdmms', 'aclgs'],
};

const mdmmsPersistConfig = {
  key: 'mdmms',
  storage,
  whitelist: ['searchHistory'],
};

const aclgsPersistConfig = {
  key: 'aclgs',
  storage,
  whitelist: ['searchHistory'],
};
const rootReducer = combineReducers({
  mdmms: persistReducer(mdmmsPersistConfig, reducerMdmms),
  aclgs: persistReducer(aclgsPersistConfig, reducerAclgs),
  router: connectRouter(history),
});

export default persistReducer(rootPersistConfig, rootReducer);

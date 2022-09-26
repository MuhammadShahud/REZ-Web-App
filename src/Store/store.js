// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./Reducers";

// const store = createStore(rootReducer, {}, applyMiddleware(thunk));
// export default store;

import {applyMiddleware, createStore} from 'redux';
import {persistStore,persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
// import {getHeaders} from '../Utils';
import Reducers from './Reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'persistData',
    storage
}

const persistedReducer = persistReducer(persistConfig,Reducers)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

// persistor.subscribe(() => {
//   console.log('Persistor=>', persistor.getState());
// });
// store.subscribe(async () => {
//   // console.log('STATE=>', JSON.stringify(store.getState()));
// });
// export {persistor, store};
export default store;
export {persistor};



import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth']
}
const persistedReducer = persistReducer(persistConfig, reducers)
const middleWare = [
    thunk,
    logger
]

let store = createStore(persistedReducer, compose(applyMiddleware(...middleWare)))
let persistor = persistStore(store)
export default { store, persistor }

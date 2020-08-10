import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export function initializeStore(initialState = {}) {
    const middleWare = [
        thunk,
        logger,
    ]
    return createStore(reducers, initialState, compose(applyMiddleware(...middleWare)))
}

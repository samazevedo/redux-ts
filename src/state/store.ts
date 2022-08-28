// import { applyMiddleware, creteStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'

// createStore deprecated
// export const store = (reducers, {}, applyMiddleware(thunk))

export const store = configureStore({ reducer: reducers })

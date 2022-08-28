// combine reducers
import { combineReducers } from '@reduxjs/toolkit'
import repositoriesReducer from './repositoriesReducer'

const reducers = combineReducers({
    repositories: repositoriesReducer,
})

export default reducers

// type that describes the kind of info inside the store
// export type RootState = ReturnType<typeof reducers>

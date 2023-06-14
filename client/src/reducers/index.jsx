import { combineReducers } from "redux"
import counterReducer from "./counter.reducer"
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
    // Reducers go here
    counter: counterReducer,
    user: userReducer,
})

export default rootReducer

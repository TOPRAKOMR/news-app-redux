import {combineReducers} from "redux"
import appReducer from "./appReducer"
import authReducer from "./authReducer"
import newsReducer from "./newsReducer"


const rootReducer= combineReducers({
    app:appReducer,
    news:newsReducer,
    auth:authReducer,


})

export default rootReducer;
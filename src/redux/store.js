import {createStore} from "redux"
import counterReducer from "./reducer/counterReducer"

const devtool =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(counterReducer,devtool);
export default store;
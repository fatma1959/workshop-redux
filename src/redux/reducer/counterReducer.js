import { DECREMENT, INCREMENT } from "../types";


const initialState ={
    count:0
}

const counterReducer =(state=initialState,{type,payload}) => {
switch (type) {
    case INCREMENT:
        return  {...state,count:state.count+payload}
    case DECREMENT:
        return  {...state,count:state.count-payload}

    default:
        return state;
}
}
export default counterReducer;
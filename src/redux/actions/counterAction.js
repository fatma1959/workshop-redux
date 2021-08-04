import { DECREMENT, INCREMENT } from "../types"


export const  increment = (number) =>{
    return{
        type:INCREMENT,
        payload:number
    }
}

export const decrement = (payload) => ({
    type: DECREMENT,
    payload
})

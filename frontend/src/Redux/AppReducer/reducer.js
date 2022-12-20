import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./action.type"

const initialVal= {
    isLoading: false,
    isError: false,
    data: []
}

export const reducer= (state=initialVal,action)=>{
    let {type,payload}=action
    switch(type){
        case GET_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        }

        case GET_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError: true
            }
        }

        default: {
            return state
        }
    }
}
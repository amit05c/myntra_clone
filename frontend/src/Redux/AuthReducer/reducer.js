import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./action.type"


const initialVal= {
    isLoading: false,
    isError: false,
    isAuth: localStorage.getItem("token") ? true : false,
    token: null,
    response:""
}

export const reducer= (state=initialVal,action)=>{
    let {type,payload}=action
    switch(type){
        case SIGNUP_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }

        case SIGNUP_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                response: payload
                
            }
        }

        case SIGNUP_FAILURE:{
            return {
                ...state,
                isError: true
            }
        }

        case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }

        case LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                token: localStorage.setItem("token",JSON.stringify(payload)),
                isAuth:true
            }
        }

        case LOGIN_FAILURE:{
            return {
                ...state,
                isError: true
            }
        }

        case LOGOUT:{
            return {
                ...state,
                isAuth:false
            }
        }



        default: {
            return state
        }
    }
}
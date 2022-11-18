import * as types from "./action.type"
import axios from "axios"
export const signup=(data)=>(dispatch)=>{
    dispatch({type: types.SIGNUP_REQUEST})
   return axios.post(`https://odd-jade-fawn-toga.cyclic.app/user/signup`,data)
    .then((res)=>dispatch({type: types.SIGNUP_SUCCESS,payload: res.data.message}))
    .catch(err=>dispatch({type: types.SIGNUP_FAILURE}))
}

export const login=(data)=>(dispatch)=>{
    dispatch({type: types.LOGIN_REQUEST})
   return axios.post(`https://odd-jade-fawn-toga.cyclic.app/user/login`,data)
    .then((res)=>dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token}))
    .catch(err=>dispatch({type: types.LOGIN_FAILURE}))
}


export const SingleProd= (id)=>{
     return axios.get(`https://odd-jade-fawn-toga.cyclic.app/singleProd/${id}`)
}

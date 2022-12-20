import * as types from "./action.type"
import axios from "axios"
export const signup=(data)=>(dispatch)=>{
    dispatch({type: types.SIGNUP_REQUEST})
   return axios.post(`https://myntraserver-production.up.railway.app/user/signup`,data)
    .then((res)=>dispatch({type: types.SIGNUP_SUCCESS,payload: res.data.message}))
    .catch(err=>dispatch({type: types.SIGNUP_FAILURE}))
}

export const login=(data)=>(dispatch)=>{
    dispatch({type: types.LOGIN_REQUEST})
   return axios.post(`https://myntraserver-production.up.railway.app/user/login`,data)
    .then((res)=>dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token}))
    .catch(err=>dispatch({type: types.LOGIN_FAILURE, payload: console.log(err)}))
}


export const SingleProd= (id)=>{
     return axios.get(`https://myntraserver-production.up.railway.app/singleProd/${id}`)
}

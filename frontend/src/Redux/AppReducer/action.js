import * as types from "./action.type"
import axios from "axios"
export const getData= (params)=>(dispatch)=>{
    dispatch({type: types.GET_REQUEST})
    const apiUrl = process.env.REACT_APP_BACKEND_API;

      axios.get(`${apiUrl}/data`,params)
      .then(res=>dispatch({type: types.GET_SUCCESS, payload: res.data}))
      .catch(err=>dispatch({type: types.GET_FAILURE}))
    
}
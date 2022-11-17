import * as types from "./action.type"
import axios from "axios"
export const getData= (params)=>(dispatch)=>{
    dispatch({type: types.GET_REQUEST})

      axios.get("https://odd-jade-fawn-toga.cyclic.app/data",params)
      .then(res=>dispatch({type: types.GET_SUCCESS, payload: res.data}))
      .catch(err=>dispatch({type: types.GET_FAILURE}))
    
}
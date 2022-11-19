const initialVal= {
    isLoading: false,
    isError: false,
    data: []
}

export const reducer= (state=initialVal,action)=>{
    let {type,payload}=action
    switch(type){
       

        case GET_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        }

       

        default: {
            return state
        }
    }
}
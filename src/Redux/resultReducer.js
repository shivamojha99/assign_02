import { SEARCH_RESULT } from "./resultTypes"

export const initialState={
    userInput:"",
    payload:""
}
const resultReducer =(state= initialState, action)=>{
    switch(action.type){
        case SEARCH_RESULT:return{
            ...state,
            userInput: action.payload
           
         }
        default:return state
    }
    // console.log(initialState.userInput)
    
}

export default resultReducer
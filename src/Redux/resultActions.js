import { SEARCH_RESULT } from "./resultTypes"
export const search_result=(text)=>
{
    return{
        type:SEARCH_RESULT,
        payload:text
    }
}

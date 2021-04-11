import * as actionTypes from "../actions/actionTypes";

const initialState = {
    currentPage:1,
    retrievedRecords:[]
}

export const pageReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                currentPage:state.currentPage+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                currentPage:state.currentPage-1
            }
        case actionTypes.PAGE_DATA:
            return {
                ...state,
                retrievedRecords:action.payload
            }
        default:
            return state;
    }
}
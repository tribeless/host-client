import * as actionTypes from "./actionTypes";

export const increment = ()=>({
    type:actionTypes.INCREMENT
});

export const decrement = ()=>({
    type:actionTypes.DECREMENT
});

export const pageResults = data=>({
    type:actionTypes.PAGE_DATA,
    payload:data
});

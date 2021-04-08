import React from 'react';
import { GET_PASSENGER, DELETE_ITEM } from '../constants'

const initialState = {
    data: [],
    totalPages : "",
};

export default function ReducerFunction(state = initialState, action) {
    console.log("actionnnn", action)
    switch (action.type) {
        case GET_PASSENGER:
            return ({
                ...state,
                data: action.payload,
                totalPages : action.payload.totalPages
            })  

        case DELETE_ITEM: {
            console.log(state.data.data, "appppp")
            const del = state.data.data.filter((val) => { return !(val._id == action.payload) })
            console.log(del, "deletedata")
            return {
                ...state,
                data: {
                    data: del
                }
            }
        }

        default:
            return { ...state }
    }
}




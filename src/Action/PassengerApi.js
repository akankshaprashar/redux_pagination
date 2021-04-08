import axios from "axios"
import { DELETE_ITEM, EDIT_ITEM, GET_PASSENGER } from "../constants"

export const getApi = (index) => dispatch => {
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=${index}&size=5`)
    // console.log("viass", res.data)
        .then(res => {
            dispatch({
                type: GET_PASSENGER,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_PASSENGER, 
                payload: err
            });

        })


}
export const Delete =(index)=> {
    return({
        type:DELETE_ITEM,
        payload:index

    })
    
    
}


export const Edit =(index)=> {
    return({
        type:EDIT_ITEM,
        payload:index

    })
    
    
}
import { createSlice } from "@reduxjs/toolkit";

export const cart_items=createSlice({
    name:'Cart',
    initialState:{
        value:[]
    },
    reducers:{
        add_item:(state,actions)=>{
            state.value=actions.payload
        }
    }

})

export const {add_item} = cart_items.actions
export default cart_items.reducer
import {configureStore} from '@reduxjs/toolkit'
import addtocart from '../redux_slices/addtocart'

export const store = configureStore({
    reducer:{
        cart:addtocart
    }
})

import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "../../models/IBasket";


interface BasketState{
    products:IBasket[]
    summ:number
}

const initialState:BasketState={
    products:[],
    summ:0
}


export const basketSlice=createSlice({
    name:'basket',
    initialState,
    reducers:{
            addItem(state,action:PayloadAction<IBasket>){
            state.products.push(action.payload);
        },
            delItem(state,action:PayloadAction<IBasket>){
            state.products.filter(product=>product.id!==action.payload.id)
            }
            
    }
})

export default basketSlice.reducer
import { IProduct } from "../../models/IProduct"
import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { fetchProducts } from "./ActionCreators";

interface DefaultState{
    products:IProduct[];
    isLoading:boolean;
    error:string
    
}

const initialState:DefaultState={
    products:[],
    isLoading:false,
    error:''
}



export const productSlice=createSlice({
name:'products',
initialState,
reducers:{

},
extraReducers:{
    [fetchProducts.fulfilled.type]:(state,action:PayloadAction<IProduct[]>)=>{
        state.isLoading=false
        state.error=''
        state.products=action.payload
    },
    [fetchProducts.pending.type]:(state)=>{
        state.isLoading=true
    },
    [fetchProducts.rejected.type]:(state,action:PayloadAction<string>)=>{
        state.isLoading=false
        state.error=action.payload
    },
 }
})


export default productSlice.reducer
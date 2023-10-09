import axios from "axios";
import { IProduct } from "../../models/IProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts =createAsyncThunk(
    'user/fetchAll',
    async(_,thunkAPI)=>{
        try{
            const response = await axios.get<IProduct[]>('https://dummyjson.com/products?skip=0&limit=100')
            return response.data.products   
         }catch(e){
            return thunkAPI.rejectWithValue("cant load")
}       
    }
    )
import { combineReducers,configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice'
import basketReducer from './reducers/BasketSlice'

const rootReducer=combineReducers({
    productReducer,
    basketReducer
})


export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch= AppStore['dispatch']
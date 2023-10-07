import { initialState} from '../types/types' 
import {actions,actionTypes} from '../types/types'
export const reducer=(state=initialState,actions:actions)=>{
    switch(actions.type){
        case actionTypes.AddGoods: return{
            ...state, 
            goods:(state.goods=actions.payload)
        }
    }
    return state
}
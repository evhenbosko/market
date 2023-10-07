interface initialStatetypes{
    goods:object
    
}
export const initialState:initialStatetypes={
    goods:{ price:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]}
    }
export type actions =
  | AddGoods
  
export enum actionTypes {
AddGoods="ADD_GOODS"
}


interface AddGoods {
  type: actionTypes.AddGoods;
  payload: object;
}

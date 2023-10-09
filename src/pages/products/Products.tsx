import React from 'react';
import Cart from '../../components/cards/Cart';
import { useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';

const Products = () => {
    const {products,isLoading,error}=useAppSelector(state=>state.productReducer)
   
        
    return (
        <div>
              {isLoading&& <>LOADING!!!</>}
              {error&&   <>ERROR</>}
           {products.map((item,idx)=>{
            return(
                <div key={item.id}>
                <Cart  item={item}/>
                {item.id}
                
                </div>
            )
           })} 
           
        </div>
    );
};

export default Products;<Cart/>
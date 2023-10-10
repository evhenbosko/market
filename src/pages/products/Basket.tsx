import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Cart from '../../components/cards/Cart'
const Basket = () => {
    
    const {products,summ} =useAppSelector(state=>state.basketReducer)
    return (
        <div>
            {products.map(( item)=>{
                return(
                    <div>
                     <Cart item={item}/>
                        </div>
                )
            })}


            basket
            {summ}
        </div>
    );
};

export default Basket;
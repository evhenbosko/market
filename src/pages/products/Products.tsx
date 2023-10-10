import React from 'react';
import {useState} from 'react'
import Cart from '../../components/cards/Cart';
import { useAppSelector } from '../../hooks/redux';
import CartLoad from '../../components/cards/CartLoad';

const Products = () => {
    const {products,isLoading,error}=useAppSelector(state=>state.productReducer)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPAge]=useState(10)
    const pagination=(products:any)=>{
        const pages=products.length/10
        let pageList=[];
        let start=0;
        let end=10;
        for(let i=0;i<pages;i++){
            pageList.push({start:start,end:end})
            start=end;
            end=start+10;      
        }
                return pageList
       }
        
        
    return (
        <div className='container'>
            
              {isLoading&& <><CartLoad/><CartLoad/><CartLoad/></>}
              {error&&   <>ERROR</>}
           {products.map((item,idx)=>{
            if(idx>=startPage&&idx<endPage){
            
                return(
                
                <div key={item.id}>
                <Cart  item={item}/>
                {item.id}
                
                </div>
                )
            }
           })} 
           {pagination(products).map((item,idx)=>{
            return(
                <button onClick={()=>{setStartPage(item.start);setEndPAge(item.end)}} key={idx}>{idx+1}</button>
            )
           })}
        </div>
    );
};

export default Products;<Cart/>
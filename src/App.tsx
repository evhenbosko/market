import { useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css'

function App() {
  const goods = useSelector(({ reducer }: any) => reducer.goods);
  const dispatch =useDispatch();
  useEffect(()=>{
    fetch('https://dummyjson.com/products?skip=0&limit=100')
    .then(response=>response.json())
    .then(data=>dispatch({type:"ADD_GOODS",payload:data}))
  },[])
  return (
  <>
  {console.log(goods)}0
  <button onClick={()=>dispatch({type:"ADD_GOODS",payload:{...goods,products: goods.products.concat({s:1})}})}></button>
  </>
    )
}

export default App

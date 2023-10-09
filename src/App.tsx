import { useEffect} from 'react'
import './App.css'
import {useAppDispatch, useAppSelector} from './hooks/redux'
import { productSlice } from './store/reducers/ProductSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProducts } from './store/reducers/ActionCreators';

function App() {
const dispatch=useAppDispatch();
useEffect(()=>{ 
  dispatch(fetchProducts())
},[])  

return (
  <>

  </>
    )
}

export default App

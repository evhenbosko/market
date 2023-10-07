import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {store} from './redux/store/store.tsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import {router} from './routes/routing.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <App />
  
  </Provider>
)

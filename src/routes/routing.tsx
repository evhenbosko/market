import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index.tsx";
import Layout from "./Layout.tsx";
import Products from "../pages/products/Products.tsx";
import Basket from "../pages/products/Basket.tsx";
export const router=createBrowserRouter([
{
    path:'/',
    element:<Layout/>,
    children:[
        {
            element:<Index/>,
            index:true
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/basket",
            element:<Basket/>
        }
        ,
        {
            path:"/",
                    element:<Index/> 
        },
        {
            path:"/contacts",
            element:<>contacts</>
        },
        {
            path:"/about",
            element:<>about</>
        }


    ]

    
}
]
)
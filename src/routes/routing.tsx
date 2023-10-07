import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index.tsx";
import Layout from "./Layout.tsx";
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
            element:<>product</>
        },
        {
            path:"/basket",
            element:<>basket</>
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
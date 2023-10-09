
import {Outlet,NavLink} from 'react-router-dom'
import NavBar from '../components/navbar/NavBar';
const layout = () => {
    return (
        <div>
            <NavBar />
            <header>
            
           
            
               
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default layout;
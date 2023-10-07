
import {Outlet,NavLink} from 'react-router-dom'
const layout = () => {
    return (
        <div>
            <header>
            
            <NavLink to="/products">prod </NavLink>
            <NavLink to="/basket">basket </NavLink>
            <NavLink to="/">home </NavLink>
            <NavLink to="/contacts">contacts </NavLink>
            <NavLink to="/about">about </NavLink>
            
               
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default layout;
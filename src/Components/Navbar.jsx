import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => console.log('logged out'))
        .catch(err => console.log('error: ' + err))
    }
  const links = (
    <>
      <li>
        <NavLink className={({isActive}) => isActive ? 'text-red-500' : ""} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? 'text-red-500' : ""} to="/login">Login</NavLink>
      </li>
      
      <li>
      <NavLink className={({isActive}) => isActive ? 'text-red-500' : ""} to="/register">Register</NavLink>
    </li>
      <li>
      <NavLink className={({isActive}) => isActive ? 'text-red-500' : ""} to="/Orders">Orders</NavLink>
    </li>
     
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Firebase</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
       {
        user && 
        <a >{user?.email}</a>
       }
        { user ? 
        
        <Link onClick={handleLogOut} className="btn">Sing Out</Link>
        :
        <Link to='/login' className="btn">SIgnIn</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;

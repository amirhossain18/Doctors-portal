import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navitems.css'
const NavbarItems = () => {
  let activeStyle = {
    textDecoration: "underline 5px solid green",
    color: "green",
    marginBottom: "1px solid green",
  };
  
    return (
        <div>
         
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="blog"
              >
              Doctors
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="review"
              >
                Review
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="appointment"
              >
               Appointments
              </NavLink>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" nav-last">
    <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="blog"
              >
              Blog
              </NavLink>
               <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="Doctors"
              >
                Doctors
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="appointment"
              >
               Appointments
              </NavLink>
  
    </ul>
    <div className="navbar-end">
  <Link className="btn" to="login">Log In </Link>
  </div>
  </div>
  
</div>
        </div>
    );
};

export default NavbarItems;
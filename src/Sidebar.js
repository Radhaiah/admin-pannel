import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>
    <hr className="sidebar-divider my-0"/>
    <li className="nav-item ">
        <NavLink className="nav-link" className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>HOME</span></NavLink>
    </li>
    <hr className="sidebar-divider"/>
    <li className="nav-item">
        <NavLink className="nav-link" className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/employees">
            <i className="fas fa-fw fa-cog"></i>
            <span>Employees</span>
        </NavLink>
    </li>
    <li className="nav-item ">
        <NavLink className="nav-link" className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/about" >
            <i className="fas fa-fw fa-wrench"></i>
            <span>About</span>
        </NavLink>
    </li>
</ul>
  )
}

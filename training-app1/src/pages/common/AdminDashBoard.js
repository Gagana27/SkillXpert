import React, { useState } from "react";
import '../../index.css'
import UserDetails from "./UserData";

import Subscription_Data from "./Subscription_Data";
import UploadFile from "./UploadVideo";
import DashBoard from "./DashBoard";
import { Link } from 'react-router-dom';
import LogOut from '../../assets/logout.svg'

export const AdminDashBoard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showOrder, setShowOrders] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showIntegrations, setShowIntegrations] = useState(false);

  const [activeNavItem, setActiveNavItem] = useState('Home');

  

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

 
  const Headers = () => {
    return (
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-2" href="#">
          iPrimoFocus Technologies
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          style={{ width: "73%" }}
          className="form-control form-control-dark "
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </div>
    );
  };

  const SideNavBar = () => {
    const handleItemClick = (itemName) => {
      setActiveNavItem(itemName);
      switch (itemName) {
        case 'Dashboard':
          setShowDashboard(true);
          setShowOrders(false);
          setShowProducts(false);
          setShowCustomer(false);
          setShowIntegrations(false)
          break;
        case 'Order':
          setShowDashboard(false);
          setShowOrders(true);
          setShowProducts(false);
          setShowCustomer(false);
          setShowIntegrations(false)
          break;
        case 'Products':
          setShowDashboard(false);
          setShowOrders(false);
          setShowProducts(true);
          setShowCustomer(false);
          setShowIntegrations(false)
          break;
        case 'Customers':
          setShowDashboard(false);
          setShowOrders(false);
          setShowProducts(false);
          setShowCustomer(true);
          setShowIntegrations(false)
          break;
         
          case 'Integrations':
            setShowDashboard(false);
            setShowOrders(false);
            setShowProducts(false);
            setShowCustomer(false);
            setShowIntegrations(true)
            break;

        default:
          break;
      }
    };
  
    return (
      <div style={{ height: "200px", width: "220px" }}>
        
        <nav id="sidebarMenu" className={`${isSidebarOpen ? "active" : ""} 
        col-md-2 col-lg-2 d-md-block bg-light sidebar`}
           style={{ height: "1200px", width: "220px", top: "140px" }}>


          <div className="position-sticky pt-3">

            <ul className="nav flex-column">
            <li className={`sidenav ${activeNavItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('Dashboard')}>
                <p style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: "3px" }}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-home"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="mx-2">DashBoard</span>
                </p>
              </li>
             
              <li className={`sidenav ${activeNavItem === 'Order' ? 'active' : ''}`} onClick={() => handleItemClick('Order')}>
                <p  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: "3px" }}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <span className="mx-2">Subscription</span>
                </p>
              </li>

              <li className={`sidenav ${activeNavItem === 'Products' ? 'active' : ''}`} onClick={() => handleItemClick('Products')}>
                <p style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: "3px" }}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-shopping-cart"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="mx-2">Products</span>
                </p>
              </li>

              <li className={`sidenav ${activeNavItem === 'Customers' ? 'active' : ''}`} onClick={() => handleItemClick('Customers')}>
                <p  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: "3px" }}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="mx-2">Customers</span>
                </p>
              </li>


              <li className={`sidenav ${activeNavItem === 'Integrations' ? 'active' : ''}`} onClick={() => handleItemClick('Integrations')}>
                <p href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', paddingTop: "3px" }}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-layers"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <span className="mx-2">Logout</span>
                </p>
              </li>

            
            </ul>
          </div>
        </nav>
      </div>
    );
  };

  
  return (
    <div>
      <Headers />
      <SideNavBar />
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' ,
        marginLeft:"230px"}}>
        {!showDashboard && !showOrder && !showProducts && !showCustomer && !showIntegrations && <p style={{height:"200px",
        color:"blue",fontWeight:"bold"}}>Welcome To AdminDashBoard</p>}
        {showDashboard && <div style={{marginTop:"-300px"}}><DashBoard/></div>}
        {showOrder &&<div style={{marginTop:"-130px"}}><Subscription_Data/></div>}
        {showProducts && <h2 style={{fontSize:"2.5rem",color:"green" ,marginTop:"-130px"}}><UploadFile/></h2>}
        {showCustomer && <div style={{marginTop:"-130px"}}><UserDetails/></div>}
        {showIntegrations && 
         <Link to="/login">
            <h2 style={{fontSize:"1.5rem",color:"blue",height:"200px",marginTop:"-120px",marginLeft: "10px"}}>
              <img src={LogOut} width="200" height="200"/>Logout
            </h2>
        </Link>}

      </h1>
    </div>
  );
};

import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import chat from '../Images/chat.png'
import { NavLink, useLocation } from "react-router-dom";
import '../css/chat.scss'
const Layout = () => {
    return (
        <>

            <div className="body-inner">
                <Header />
                <Outlet />
                <div class='zalome'>
                    <NavLink to="/chat" class="nav-link" > <img alt='icon zalo' src={chat} /> </NavLink>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Layout;
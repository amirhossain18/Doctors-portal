import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarItems from '../NavbarItems/NavbarItems';

const Main = () => {
    return (
        <div>
            <NavbarItems></NavbarItems>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
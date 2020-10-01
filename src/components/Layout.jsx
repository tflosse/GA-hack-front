import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Main.css'

const Layout = (props) => {
    return (
    <div className="Layout-component">  
        <Nav />
        <div className="Layout-container">
        {props.children}
        </div>
        <Footer />
    </div>
    )};

export default Layout;
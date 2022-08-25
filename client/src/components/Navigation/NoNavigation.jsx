import React from 'react';
import { Link } from 'react-router-dom';
 
class NoNavigation extends React.Component {
    render(){
        let pathName = window.location.pathname;
        const maxWidth = 150;
        return (
            <>
                {/* Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">                
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="top: 0; animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/">
                                    <img src="https://digipuush.com/wp-content/uploads/2022/03/Logo-Orange-2048x747.png.webp" alt="logo" style={{maxWidth: maxWidth + 'px'}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
 
export default NoNavigation;
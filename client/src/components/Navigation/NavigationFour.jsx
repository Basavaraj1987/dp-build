import React from 'react';
import { Link } from 'react-router-dom';
 
class NavigationFour extends React.Component {
    render(){
        let pathName = window.location.pathname;
        const maxWidth = 200;
        return (
            <>
                {/* Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                        <nav className="uk-navbar-container">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services-two">Services</Link></li>
                                {/* <li><Link to="#">Project</Link>
                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li><Link to="/projects">Project</Link></li>
                                            <li><Link to="/project-details">Single Project</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/testimonials">Testimonials</Link></li>
                                <li><Link to="/team">Team</Link></li> */}
                                <li><Link to="/blog">Blog</Link>
                                    {/* <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog-details">Single Blog</Link></li>
                                        </ul>
                                    </div> */}
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="top: 0; animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/home-four">
                                    <img src="https://digipuush.com/wp-content/uploads/2022/03/Logo-Orange-2048x747.png.webp" alt="logo" style={{maxWidth: maxWidth + 'px'}} />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="#">Home</Link>
                                        </li>
                                        <li className={pathName === '/about' ? 'uk-active' : ''}>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className={pathName === '/services-two' ? 'uk-active' : ''}>
                                            <Link to="/services-two">Services</Link>
                                            {/* <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li className={pathName === '/services' ? 'uk-active' : ''}>
                                                        <Link to="/services">Services One</Link>
                                                    </li>
                                                    <li >
                                                        <Link to="/services-two">Services Two</Link>
                                                    </li>
                                                    <li className={pathName === '/service-details' ? 'uk-active' : ''}>
                                                        <Link to="/service-details">Single Services</Link>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </li>
                                        <li className={pathName === '/blog' || pathName === '/blog-details' ? 'uk-active' : ''}>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li className={pathName === '/contact' ? 'uk-active' : ''}>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
 
export default NavigationFour;
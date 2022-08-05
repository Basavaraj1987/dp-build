import React from 'react';
import { Link } from 'react-router-dom';
 
class NavigationFive extends React.Component {
    render(){
        let pathName = window.location.pathname;
        return (
            <>
                {/* Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                        <nav className="uk-navbar-container">
                            <ul className="uk-navbar-nav">
                                <li 
                                    className={pathName === '/home-four' || pathName === '/home-five' || pathName === '/home-six' || pathName === '/home-seven' || pathName === '/home-eight' || pathName === '/home-nine' || pathName === '/home-ten' ? 'uk-active' : ''}
                                >
                                    <Link to="#">
                                        Home
                                    </Link>

                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li className={pathName === '/home-four' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-four"
                                                    onClick={() => window.location.refresh()}
                                                >
                                                    Home Four
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-five' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-five"
                                                    onClick={() => window.location.refresh()}
                                                >
                                                    Home Five
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-six' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-six"
                                                    onClick={() => window.location.refresh()}
                                                >
                                                    Home Six
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-seven' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-seven"
                                                    onClick={() => window.location.refresh()}
                                                >
                                                    Home Seven
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-eight' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-eight"
                                                >
                                                    Home Eight
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-nine' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-nine"
                                                >
                                                    Home Nine
                                                </Link>
                                            </li>
                                            <li className={pathName === '/home-ten' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/home-ten"
                                                >
                                                    Home Ten
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="#">Services</Link>
                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li><Link to="/services">Services One</Link></li>
                                            <li><Link to="/services-two">Services Two</Link></li>
                                            <li><Link to="/service-details">Single Services</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="#">Project</Link>
                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li><Link to="/projects">Project</Link></li>
                                            <li><Link to="/project-details">Single Project</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/testimonials">Testimonials</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="#">Blog</Link>
                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog-details">Single Blog</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area" data-uk-sticky="top: 0; animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/home-four">
                                    <img src={require("../../assets/images/logo.png")} alt="logo" />
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
                                        <li className="uk-active"><Link to="#">Home</Link>
                                            <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li className={pathName === '/home-four' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-four"
                                                        >
                                                            Home Four
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-five' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-five"
                                                        >
                                                            Home Five
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-six' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-six"
                                                        >
                                                            Home Six
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-seven' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-seven"
                                                        >
                                                            Home Seven
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-eight' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-eight"
                                                        >
                                                            Home Eight
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-nine' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-nine"
                                                        >
                                                            Home Nine
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-ten' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-ten"
                                                        >
                                                            Home Ten
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="#">Services</Link>
                                            <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li><Link to="/services">Services One</Link></li>
                                                    <li><Link to="/services-two">Services Two</Link></li>
                                                    <li><Link to="/service-details">Single Services</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to="#">Project</Link>
                                            <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li><Link to="/projects">Project</Link></li>
                                                    <li><Link to="/project-details">Single Project</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to="/testimonials">Testimonials</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="#">Blog</Link>
                                            <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/blog-details">Single Blog</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>

                                <div className="lang">
                                    <form>
                                        <div>
                                            <select>
                                                <option value="eng">En</option>
                                                <option value="ge">Ge</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
 
export default NavigationFive;
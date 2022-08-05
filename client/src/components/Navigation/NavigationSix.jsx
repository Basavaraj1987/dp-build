import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/images/logo2.png';
 
class NavigationSix extends React.Component {
    render(){
        return (
            <>
                {/* Start Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                
                        <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#home"
                                    >
                                        Home
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#about"
                                    >
                                        About
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#testimonials"
                                    >
                                        Testimonials
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#project"
                                    >
                                        Project
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#blog"
                                    >
                                        Blog
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#contact"
                                    >
                                        Contact
                                    </AnchorLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area header-style-two" data-uk-sticky="top: 0; animation: uk-animation-slide-top;">
                    <div className="uk-container-expand">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" data-uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <AnchorLink
                                                href="#home"
                                                offset={() => 100}
                                            >
                                                Home
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                offset={() => 100} 
                                                href="#about"
                                            >
                                                About
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                offset={() => 100} 
                                                href="#testimonials"
                                            >
                                                Testimonials
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                href="#project"
                                                offset={() => 100}
                                            >
                                                Project
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#blog"
                                            offset={() => 100}>Blog</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#contact"
                                            offset={() => 100}>Contact</AnchorLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Navbar Area */}
            </>
        );
    }
}
 
export default NavigationSix;
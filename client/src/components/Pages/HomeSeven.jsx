import React from 'react'
import Banner from '../HomeSeven/Banner';
import FeaturesTwo from '../HomeSeven/FeaturesTwo';
import SeperatedBar from '../HomeTwo/SeperatedBar';
import About from '../HomeTwo/About';
import Services from '../HomeTwo/Services';
import Project from '../HomeTwo/Project';
import Testimonials from '../HomeTwo/Testimonials';
import PartnerLogo from '../HomeTwo/PartnerLogo';
import Team from '../HomeTwo/Team';
import Newsletter from '../HomeTwo/Newsletter';
import LatestNews from '../HomeTwo/LatestNews';
import Contact from '../HomeTwo/Contact';
import Footer from '../Common/Footer';
import NavigationFour from '../Navigation/NavigationFour';
 
class Home extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                {/* Main Banner */}
                <Banner />

                {/* Features Area */}
                <FeaturesTwo />

                {/* Vertical line */}
                <SeperatedBar />

                {/* About Area */}
                <About />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Services Area */}
                <Services />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Project Area */}
                <Project />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Feedback Area */}
                <Testimonials />

                {/* Partner Area */}
                <PartnerLogo />

                {/* Team Area */}
                <Team />

                {/* Subscribe Area */}
                <Newsletter />

                {/* Blog Area */}
                <LatestNews />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Contact Area */}
                <Contact />
                
                {/* Footer Area */}
                <Footer />
            </>
        );
    }
}
 
export default Home;
import React from 'react'
import Banner from '../HomeSix/Banner';
import FeaturesTwo from '../HomeSix/FeaturesTwo';
import SeperatedBar from '../HomeSix/SeperatedBar';
import About from '../HomeSix/About';
import Services from '../HomeSix/Services';
import Project from '../HomeSix/Project';
import Testimonials from '../HomeSix/Testimonials';
import PartnerLogo from '../HomeSix/PartnerLogo';
import Team from '../HomeSix/Team';
import Newsletter from '../HomeSix/Newsletter';
import LatestNews from '../HomeSix/LatestNews';
import Contact from '../HomeSix/Contact';
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
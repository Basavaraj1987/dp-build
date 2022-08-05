import React from 'react'
import Banner from '../HomeFour/Banner';
import FeaturesTwo from '../HomeFour/FeaturesTwo';
import SeperatedBar from '../Common/SeperatedBar';
import About from '../HomeFour/About';
import Services from '../HomeFour/Services';
import Project from '../HomeFour/Project';
import Testimonials from '../HomeFour/Testimonials';
import PartnerLogo from '../HomeFour/PartnerLogo';
import Team from '../HomeFour/Team';
import Newsletter from '../HomeFour/Newsletter';
import LatestNews from '../HomeFour/LatestNews';
import Contact from '../Common/Contact';
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
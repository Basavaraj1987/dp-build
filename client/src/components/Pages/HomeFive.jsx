import React from 'react';
import NavigationFive from '../Navigation/NavigationFive';
import Banner from '../HomeFive/Banner';
import FeaturesTwo from '../HomeFive/FeaturesTwo';
import SeperatedBar from '../HomeFive/SeperatedBar';
import About from '../HomeFive/About';
import Services from '../HomeFive/Services';
import Project from '../HomeFive/Project';
import Testimonials from '../HomeFive/Testimonials';
import PartnerLogo from '../HomeFive/PartnerLogo';
import Team from '../HomeFive/Team';
import Newsletter from '../HomeFive/Newsletter';
import LatestNews from '../HomeFive/LatestNews';
import Contact from '../HomeFive/Contact';
import Footer from '../Common/Footer';
 
class Home extends React.Component {
    render(){
        return (
            <>
                <NavigationFive />

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
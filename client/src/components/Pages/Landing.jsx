import React from 'react';
import NoNavigation from '../Navigation/NoNavigation';
import Banner from '../Landing/Banner';
import FeaturesTwo from '../Landing/FeaturesTwo';
import SeperatedBar from '../Common/SeperatedBar';
import About from '../Landing/About';
import Services from '../Landing/Services';
import Project from '../Landing/Project';
import Testimonials from '../Landing/Testimonials';
import PartnerLogo from '../Landing/PartnerLogo';
import Team from '../Landing/Team';
import Newsletter from '../Landing/Newsletter';
import LatestNews from '../Landing/LatestNews';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';

class Landing extends React.Component {
    render(){
        return (
            <>                
                <NoNavigation />
                
                {/* Main Banner */}
                <Banner />

                {/* Features Area */}
                <FeaturesTwo />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Project Area */}
                <Project />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Services Area */}
                <Services />

                {/* Vertical line */}
                <SeperatedBar />

                {/* Feedback Area */}
                <Testimonials />

                {/* Partner Area */}
                <PartnerLogo />

                {/* Subscribe Area */}
                <Newsletter />

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
 
export default Landing;
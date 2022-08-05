import React from 'react';
import DefaultNavigation from '../Navigation/DefaultNavigation';
import Banner from '../HomeDefault/Banner';
import FeaturesTwo from '../HomeDefault/FeaturesTwo';
import SeperatedBar from '../Common/SeperatedBar';
import About from '../HomeDefault/About';
import Services from '../HomeDefault/Services';
import Project from '../HomeDefault/Project';
import Testimonials from '../HomeDefault/Testimonials';
import PartnerLogo from '../HomeDefault/PartnerLogo';
import Team from '../HomeDefault/Team';
import Newsletter from '../HomeDefault/Newsletter';
import LatestNews from '../HomeDefault/LatestNews';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
 
class Home extends React.Component {
    render(){
        return (
            <>
                <DefaultNavigation />
                
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
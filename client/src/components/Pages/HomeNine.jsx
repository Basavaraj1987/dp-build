import React from 'react'
import NavigationSeven from '../Navigation/NavigationSeven';
import Banner from './../HomeNine/Banner';
import About from '../HomeNine/About';
import WhatWeDo from '../HomeNine/WhatWeDo';
import WhyChooseUs from '../HomeNine/WhyChooseUs';
import Process from './../HomeNine/Process';
import LeadershipMembers from '../HomeNine/LeadershipMembers';
import FunFacts from '../HomeNine/FunFacts';
import Testimonials from './../HomeNine/Testimonials';
import LatestNews from './../HomeNine/LatestNews';
import Partner from './../HomeNine/Partner';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';

class HomeNine extends React.Component {
    render(){
        return (
            <>
                <NavigationSeven />

                <Banner />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <About />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <WhatWeDo />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <WhyChooseUs />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <Process />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <LeadershipMembers />

                <FunFacts />

                <Testimonials />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <LatestNews />

                <Partner />

                <Contact />
 
                <Footer />
            </>
        );
    }
}
 
export default HomeNine;
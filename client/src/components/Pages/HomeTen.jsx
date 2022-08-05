import React from 'react'
import NavigationFive from '../Navigation/NavigationFive';
import Banner from '../HomeTen/Banner';
import Features from '../HomeTen/Features';
import WhatWeDo from '../HomeTen/WhatWeDo';
import Experience from '../HomeTen/Experience';
import Testimonials from '../HomeTen/Testimonials';
import Pricing from '../HomeTen/Pricing';
import Projects from '../HomeTen/Projects';
import Partner from '../HomeTen/Partner';
import LatestNews from '../HomeTen/LatestNews';
import Newsletter from '../HomeTen/Newsletter';
import Footer from '../Common/Footer';

class HomeTen extends React.Component {
    render(){
        return (
            <>
                <NavigationFive />

                <Banner />

                <Features />

                <WhatWeDo />

                <Experience />

                <Testimonials />

                <Pricing />

                <Projects />

                <div className="uk-border">
                    <div className="uk-container">
                        <div className="uk-border"></div>
                    </div>
                </div>

                <Partner />

                <LatestNews />

                <Newsletter />

                <Footer />
            </>
        );
    }
}
 
export default HomeTen;
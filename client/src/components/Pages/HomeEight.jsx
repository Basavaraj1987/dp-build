import React from 'react'
import NavigationSix from '../Navigation/NavigationSix';
import Banner from './../HomeEight/Banner';
import Services from '../HomeEight/Services';
import About from '../HomeEight/About';
import Process from '../HomeEight/Process';
import Testimonials from '../HomeEight/Testimonials';
import RecentProjects from '../HomeEight/RecentProjects';
import FunFacts from '../HomeEight/FunFacts';
import LatestNews from '../HomeEight/LatestNews';
import Partner from '../HomeEight/Partner';
import Contact from '../HomeEight/Contact';
import Footer from '../Common/Footer';

class HomeEight extends React.Component {
    render(){
        return (
            <>
                <NavigationSix />

                <Banner /> 

                <Services />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <About />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <Process />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <Testimonials />

                <div className="separate">
                    <div className="br-line"></div>
                </div>

                <RecentProjects />

                <FunFacts />

                <LatestNews />

                <Partner />

                <Contact />
  
                <Footer />
            </>
        );
    }
}
 
export default HomeEight;
import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../About/Banner';
import AboutContent from '../About/AboutContent';
import NavigationFour from '../Navigation/NavigationFour';
 
class About extends React.Component {
    render(){
        return (
            <>

                <NavigationFour />

                <Banner />

                <AboutContent />

                <Footer />
            </>
        );
    }
}
 
export default About;
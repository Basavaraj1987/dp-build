import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Testimonials/Banner';
import TestiContent from '../Testimonials/TestiContent';
 
class Testimonials extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                <Banner />

                <TestiContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Testimonials;
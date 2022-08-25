import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceOneContent from '../Services/ServiceOneContent';
 
class Services extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                <Banner />

                <ServiceOneContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Services;
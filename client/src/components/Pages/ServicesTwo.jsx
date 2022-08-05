import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceTwoContent from '../Services/ServiceTwoContent';
 
class ServicesTwo extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                <Banner />

                <ServiceTwoContent />
                
                <Footer />
            </>
        );
    }
}
 
export default ServicesTwo;
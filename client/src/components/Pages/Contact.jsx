import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Contact/Banner';
import Contact from '../HomeTwo/Contact';
 
class ContactUs extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                <Banner />

                <Contact />
                
                <Footer />
            </>
        );
    }
}
 
export default ContactUs;
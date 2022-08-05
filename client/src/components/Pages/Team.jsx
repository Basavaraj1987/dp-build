import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Team/Banner';
import TeamBody from '../Team/TeamBody';
 
class Team extends React.Component {
    render(){
        return (
            <>
                <NavigationFour />

                <Banner />

                <TeamBody />
                
                <Footer />
            </>
        );
    }
}
 
export default Team;
import React from 'react';
 
class Banner extends React.Component {
    render(){
        return (
            <section className="page-title-area uk-page-title">
                <div className="uk-container">
                    <h1>Team</h1>
                    <ul>
                        <li><a href="/home-four">Home</a></li>
                        <li>Team</li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default Banner;
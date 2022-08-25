import React from 'react';
 
class Banner extends React.Component {
    render(){
        return (
            <section className="page-title-area uk-page-title">
                <div className="uk-container">
                    <h1>About</h1>
                    <ul>
                        <li><a href="/home-four">Home</a></li>
                        <li>About</li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default Banner;
import React from 'react';
 
class FunFacts extends React.Component {
    render(){
        return (
            <>
                <div className="funfacts-area uk-section uk-funfacts">
                    <div className="uk-container">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-funfacts">
                                    <div className="icon">
                                        <i uk-icon="users"></i>
                                    </div>
                                    <h3>1800</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-funfacts">
                                    <div className="icon">
                                        <i uk-icon="heart"></i>
                                    </div>
                                    <h3>2500</h3>
                                    <p>Completed Projects</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-funfacts">
                                    <div className="icon">
                                        <i uk-icon="user"></i>
                                    </div>
                                    <h3>250</h3>
                                    <p>Team Members</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-funfacts">
                                    <div className="icon">
                                        <i uk-icon="unlock"></i>
                                    </div>
                                    <h3>150</h3>
                                    <p>Award Winners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default FunFacts;
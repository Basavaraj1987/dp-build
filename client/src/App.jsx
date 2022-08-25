import '../src/assets/css/flaticon.css';
import '../src/assets/css/animate.min.css';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/react-modal-video/css/modal-video.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from './components/Common/Preloader';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import ServicesTwo from './components/Pages/ServicesTwo';
import ServiceDetails from './components/Pages/ServiceDetails';
import Project from './components/Pages/Project';
import ProjectDetails from './components/Pages/ProjectDetails';
import BlogDetails from './components/Pages/BlogDetails';
import Testimonials from './components/Pages/Testimonials';
import Team from './components/Pages/Team';
import Blog from './components/Pages/Blog';
import TermsConditions from './components/Pages/TermsConditions';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Contact from './components/Pages/Contact';
import Landing from './components/Pages/Landing';

class App extends React.Component {
    state = {
        loading: true
    };
    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }
    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }
    render() {
        return (
            <Router>
                <>
                    {this.state.loading ? <Preloader /> : ''}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} /> 
                    <Switch>
                        <Route path="/service-details/:title" exact component={ServiceDetails} />
                    </Switch>
                    <Route path="/projects" exact component={Project} />
                    <Route path="/project-details" exact component={ProjectDetails} />
                    <Route path="/blog-details/:title/:id" exact component={BlogDetails} />
                    <Route path="/testimonials" exact component={Testimonials} />
                    <Route path="/team" exact component={Team} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/terms-conditions" exact component={TermsConditions} />
                    <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                    <Route path="/contact" exact component={Contact} />

                    <Route path="/digital-marketing-landing" exact component={Landing} />
                </>
            </Router>
        );
    }
}

export default App;

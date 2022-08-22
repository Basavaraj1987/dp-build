import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import teamTwo from '../../assets/images/team/Photo1.jpg';
import teamThree from '../../assets/images/team/Photo12.jpg';
import myData from '../../assets/json/blogsDetails.json';
import { Helmet } from "react-helmet";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class BlogDetails extends React.Component {

    state = {
        currentblog:[],
        otherblog:[],
        servicesoption:[]
    };

    componentDidMount(){

        const $style = document.createElement("style");
        document.head.appendChild($style);
        $style.innerHTML = `a { display:inline; }`;
      
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        const servicesoption = [{"id":1,"name":"Branding"},{"id":2,"name":"Creative"},{"id":3,"name":"Social Media Marketing"},{"id":4,"name":"Website"},{"id":5,"name":"SEO"},{"id":6,"name":"Influencer Marketing"},{"id":7,"name":"Content Marketing"},{"id":8,"name":"Performance Marketing"},{"id":9,"name":"Video & Animation"}];

        // axios.get('http://localhost:8000/posts', config)
        // .then(res => {
        //   const blogs = res.data;
        //   console.log(blogs);
        //   this.setState({ blogs });
        // })
        // .catch(error => {
        //     this.setState({ errorMessage: error.message });
        //     console.error('There was an error!', error);
        // });

        const id = window.location.href.split("/").pop();
        const currentblog = [];
        const otherblog = [];

        this.setState({ servicesoption });
        myData.map(blog => {
                if(id == blog.id){
                    currentblog.title = blog.title.rendered;
                    currentblog.post_image = blog.featured_image_src;
                    currentblog.content = blog.content.rendered;
                    // currentblog.seo = Object.keys(blog.yoast_head_json).map((key) => [Number(key), blog.yoast_head_json[key]]);
                    // const temp = Object.entries(blog.yoast_head_json);
                    // currentblog.seo = Object.entries(temp);
                    currentblog.seo = blog.yoast_head;
                    this.setState({ currentblog });
                }else{
                    otherblog[blog.id] = blog;
                }
                return null;
            }
        );

        this.setState({ otherblog });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const BlogDetails = this.state.currentblog;
        const otherBlogDetails = this.state.otherblog;
        const seoTag = this.state.currentblog.seo;

        return (
            <>
                <NavigationFour />
                
                {/*  Start Page Title Area */}
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>{BlogDetails.title}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li>{BlogDetails.title}</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                <Helmet>
                    { ReactHtmlParser(seoTag) }
                </Helmet>

                {/*  Start Blog Details Area */}
                <section className="blog-details-area uk-blog-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article blog-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="article-img">
                                        <img src={BlogDetails.post_image} alt="blog-details" style={{width: '100%'}} />
                                        <div className="date">20 <br /> Mar</div>
                                    </div>

                                    <div className="article-content">
                                        {/* <ul className="category">
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Development</Link></li>
                                        </ul> */}

                                        <h3>{BlogDetails.title}</h3>

                                        <div dangerouslySetInnerHTML={{__html: BlogDetails.content}} />

                                        <div>
                                            <div>
                                                <div className="col-md-3" style={{ width: '15%', float: 'left' }}>
                                                    <img src={teamTwo} alt="Anil Gorraladaku" style={{ height: '90px', width: '90px' , borderRadius: '50%',    objectFit: 'cover', objectPosition: 'top'}} />
                                                </div>
                                                <div className="col-md-9">
                                                    <h4 style={{ marginBottom:'0' }}>Anil Gorraladaku | <a target="_blank" href="https://www.linkedin.com/in/anilgorraladaku/"  uk-icon="icon: linkedin"></a></h4>
                                                    <p style={{ marginTop:'0' }}>He is a Digital Growth Hacker with mastery in growing various businesses using online media platforms.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="col-md-3" style={{ width: '15%', float: 'left' }}>
                                                    <img src={teamThree} alt="Chethan Shenoy" style={{ height: '90px', width: '90px' , borderRadius: '50%',    objectFit: 'cover', objectPosition: 'top'}} />
                                                </div>
                                                <div className="col-md-9">
                                                    <h4 style={{ marginBottom:'0' }}>Chethan Shenoy | <a target="_blank" href="https://www.linkedin.com/in/chethanshenoy/"  uk-icon="icon: linkedin"></a></h4>
                                                    <p style={{ marginTop:'0' }}>He is a Brand enthusiast with excellence in Brand Communication execution & delivery.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <div className="post-controls-buttons uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                        <div className="item">
                                            <Link to="#" className="uk-button uk-button-default">Prev Post</Link>
                                        </div>

                                        <div className="item uk-text-right">
                                            <Link to="#" className="uk-button uk-button-default">Next Post</Link>
                                        </div>
                                    </div> */}

                                    {/* <div id="comments" className="comments-area">
                                        <h2 className="comments-title">3 Comments</h2>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientOne} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={clientTwo} alt="client" className="avatar" />
                                                                    <b className="fn">John Smith</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link to="#">
                                                                        March 28, 2019 at 7:16 am
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientThree} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>

                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title">Leave Link Reply</h3>

                                            <form id="commentform" className="comment-form" onSubmit={this.onFormSubmit}>
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                
                                                <p className="comment-form-comment">
                                                    <textarea id="comment" placeholder="Comment" cols="45" rows="5" />
                                                </p>
                                                <p className="comment-form-author">
                                                    <input id="author" placeholder="Name" type="text" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" placeholder="Email"  type="text" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <input id="url" placeholder="Website" type="text" />
                                                </p>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="uk-sidebar uk-width-1-5">
                                    <div className="widget widget_search" style={{display: "none"}}>
                                        {/* <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form> */}
                                    </div>
                                    
                                    <div className="widget widget_categories" style={{display: "none"}}>
                                        {/* <h3 className="widget-title">Categories</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">AJAX</Link></li>
                                            <li><Link to="#">Apache</Link></li>
                                            <li><Link to="#">CSS</Link></li>
                                            <li><Link to="#">PHP</Link></li>
                                            <li><Link to="#">Django</Link></li>
                                            <li><Link to="#">Error</Link></li>
                                            <li><Link to="#">IIS</Link></li>
                                            <li><Link to="#">JavaScript</Link></li>
                                        </ul> */}
                                    </div>
                                    
                                    <div className="widget widget_search">
                                        <h3 className="widget-title">Give your Brand that Push</h3>
                                        <div className="bar"></div>
                                        <form>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your name" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your email" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your phone" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <select className="uk-input">
                                                    {
                                                        this.state.servicesoption.map(service =>
                                                            <option key={service.id} value={service.name}>{service.name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <br />
                                            <input type="submit" value="Submit" className='uk-button uk-button-default' />
                                        </form>
                                    </div>

                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            {
                                                otherBlogDetails.map(otherBlog =>
                                                    <li key={otherBlog.id}>
                                                        <Link to="#">
                                                            <img src={otherBlog.post_image} alt="blog" />
                                                        </Link>
        
                                                        {/* <h5><Link>{otherBlog.title}</Link></h5> */}
                                                        <p className="date">21 March, 2019</p>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_tag_cloud" style={{display: "none"}}>
                                        {/* <h3 className="widget-title">Tags</h3>
                                        <div className="bar"></div>

                                        <div className="tagcloud">
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                        </div> */}
                                    </div>
                                    
                                    <div className="widget widget_archive" style={{display: "none"}}>
                                        {/* <h3 className="widget-title">Archives</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">December 2018</Link></li>
                                            <li><Link to="#">January 2019</Link></li>
                                            <li><Link to="#">February 2019</Link></li>
                                            <li><Link to="#">March 2019</Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}
 
export default BlogDetails;
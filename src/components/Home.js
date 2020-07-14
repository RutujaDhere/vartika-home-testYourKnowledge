import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';




const Home = () =>  (
    <Fragment>
        <Helmet> <title>TestYourKnowledge</title> </Helmet>
        <React.StrictMode>
            
        <div id="home">
            
            <section>
                
                <h1>TestYourKnowledge</h1>
              
                <div className="play-button-container">
                <ul>
                    <li><Link className="play-button" to="/play/instructions">Stock Market</Link></li>
                </ul>
                </div>
                <div className="auth-container">
                    <Link to="/play/instructions" className="auth-buttons" id="login-button">Finantial Management</Link>
                    <Link to="/play/instructions" className="auth-buttons" id="signup-button">Digital Banking</Link>
                    </div>
            </section>
            
         </div>
         
         </React.StrictMode>
         </Fragment>

);



export default Home; 
import React, { Component } from 'react';
import '../styles/landing.css';
import { Link } from 'react-router-dom';

//The Landing Page of app
class Landing extends Component {
    render() {
        return(
            <div className="container">
            <div className= "LandingHeaders">
            <h1 className="Header1"> Show your Chops to the World </h1>
                {/* <h1 className= "Header1"> CHOPS </h1>
                <h1 className= "Header1"> CV </h1> */}
                

            <Link to={'/mychops'} className="button"> MY CHOPS CV </Link>
            </div>
            </div>
           
        );
    }
}

export default Landing;
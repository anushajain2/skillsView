import React, { Component } from 'react';
import '../styles/landing.css';
import { Link } from 'react-router-dom';

let doSomething;
//The Landing Page of app
class Trial extends Component {
    componentDidMount() {
        let xss = '<h1>tyiu</h1>';

        // whatever is in the string passed to Function
        // becomes the body of the function
        let doSomething = new Function(xss);

        
    };
    render() {
        return(
            <div className="container">
                <button>Do Something</button>
                {document.querySelector('button').addEventListener('click', doSomething, false)}
            </div>
           
        );
    }
}

export default Trial;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/chooseskill.css';

class ChooseSkill extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          zipcode: ''
        };

        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
    };

    inputUpdated(e) {
        const { value } = e.target;
      
        this.setState({ zipcode: value });
    };
  
    submitZipCode(e) {
        e.preventDefault();
      
        const { zipcode } = this.state;
        const { onSubmit } = this.props;
      
        onSubmit(zipcode);
        // this.setState({ zipcode: '' });
    };

    render() {
        return(
            <div className= "LandingHeaders">
                <h1 className= "Header1"> Choose a Skill to Add </h1>
                <form onSubmit={this.submitZipCode}>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input
                        className="form-control"
                        type="input"
                        name="zipcode" 
                        value={this.state.zipcode} 
                        onInput={this.inputUpdated} />
                    <Link to={{ pathname: '/mychops', state: {zipcode: this.state.zipcode}}} type="submit" className='btn btn-success'>submit</Link>

                    {/* <select id="mySelect">
                        <option value="JavaScript">JavaScript</option>
                        <option value="React.js">React.js</option>
                        <option value="Node.js">Node.js</option>
                    </select>
                    <button type="submit"> Submit </button> */}
                </form> 
            </div>
       
        );
    }
};

export default ChooseSkill;
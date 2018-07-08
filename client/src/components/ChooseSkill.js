import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/chooseskill.css';

class ChooseSkill extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          chosenSkill: ''
        };

        this.inputUpdated = this.inputUpdated.bind(this);
    };

    inputUpdated(e) {
        const { value } = e.target;
      
        this.setState({ chosenSkill: value });
    };

    render() {
        return(
            <div className= "LandingHeaders">
                <h1 className= "Header1"> Choose a Skill to Add </h1>
                <form>
                    <label>Choose Skill</label>
                    <input
                        className="form-control"
                        type="input"
                        name="chosenSkill" 
                        value={this.state.chosenSkill} 
                        onInput={this.inputUpdated} />
                    <Link to={{ pathname: '/surveys/new', state: {chosenSkill: this.state.chosenSkill}}} type="submit" className='btn btn-success'>submit</Link>
                </form> 
            </div>
       
        );
    }
};

export default ChooseSkill;
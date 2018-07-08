import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

var button = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    'background-color': 'red'
}

var skill;
class MyChops extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosenSkill: ''
        };
    }
    
    componentDidMount() {
        skill = this.props.location.state;
        _.map(skill, selectedSkill => {
            this.setState({ chosenSkill: selectedSkill })
        });
    };

    renderSkills() {
        //render the entire list of skills in a popup.
        //(use html dropdown)have submit/go button that will update the skill state,
        //and navigates to the /surveys/new component that then shows questions for that skill only.
        
    };

    renderChops() {
     /*Go through chops collection for this user and display the chops that are enabled (value 1) for this user, 
        for each skill that the user has.
        */   
        // return this.props.skill.map(skill => {
        //     return (
        //         <div key={skill._id}>
        //             <div>
        //                 <span>{skill.title}</span>
        //                 <p> {skill.details} </p>
        //             </div>
        //         </div>
        //     );
        // });

    };

    render() {
        return(
            <div> 
                <h1 className="title"> Display my chops </h1>
              
                <h1>{this.state.chosenSkill}</h1>
                {/* <h1>Add a Skill </h1>
                <button onClick={() => {this.renderSkills()}} className="addskill"> Add a Skill </button>
        {/*show popup, select skill you want to add, then click go. depending on 
        the value u selected, we will show the questions in the survey.*/}
                {/* <Link to={'/surveys/new'} className="add"> Add </Link>
                </div> */} 
            </div>
        );
    };
}

function mapStatetoProps({ chosenSkill }) {
    return { chosenSkill };
}

export default connect(mapStatetoProps)(MyChops);
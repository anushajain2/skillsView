import _ from 'lodash';
import React, { Component } from 'react';
import '../../styles/surveyform.css';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import SurveyFieldTitle from './SurveyFieldTitle';
import { Link } from 'react-router-dom';

const JavaScriptFIELDS = [
    { label: 'How do modules work?', name: 'S1' },
    { label: 'Write a program to say how amazing Anusha is', name: 'S2' },
    { label: 'Write a callback for a MongoDB query', name: 'S3' }
];

const PythonFIELDS = [
    { label: 'How do loops work?', name: 'S1' },
    { label: 'Write a program to say how amazing Anusha is', name: 'S2' },
    { label: 'Write an ML program', name: 'S3' }
];

var FIELDS;
var title = "skill";
//The Landing Page of app
class SurveyForm extends Component {
    renderFields() {
        //loop through an object (either written in code or stored in database) that has 
        //list of all questions for this particular skill (taken from this.state.skill) and 
        //use them in the labels of the questions and maybe the components will depend on those too.
        if(title="JavaScript"){
            FIELDS = JavaScriptFIELDS;
        }
        else if(title="Python"){
            FIELDS = PythonFIELDS;
        };

        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        
        return(
            <div className="surveyForm">
            <h1 className="title"> Show your Chops to the World </h1>
             <form className="actualForm" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                <Field key={title} label="Skill" name='title' component={SurveyFieldTitle} chosenSkill={this.props.chosenSkill}/>
                {this.renderFields()}
                <br />
                <Link to="/surveys" className="cancel"> Cancel </Link>
                <button type="submit" className="submit"> Submit </button>
             </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.S1) {
        errors.S1 = 'Please show your chops by providing an answer';
    }

    if(!values.S2) {
        errors.S2 = 'Please show your chops by providing an answer';
    }

    if(!values.S3) {
        errors.S3 = 'Please show your chops by providing an answer';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
//SurveyNew shows surveyform and surveyformreview components
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import '../../styles/surveynew.css';

var skill;
//The Landing Page of app
class SurveyNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosenSkill: '',
            showFormReview :false
        };
    }
    
    componentDidMount() {
        skill = this.props.location.state;
        _.map(skill, selectedSkill => {
            this.setState({ chosenSkill: selectedSkill })
        });
    };

    // state = { showFormReview :false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview chosenSkill={this.state.chosenSkill}
                    onCancel={() => this.setState({ showFormReview: false})}
            />
            );
        }
        return (
           
            <SurveyForm chosenSkill={this.state.chosenSkill}
                onSurveySubmit={() => this.setState({showFormReview: true})} 
            />
        );
    }
    render() {
        return(
            <div>
            {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);

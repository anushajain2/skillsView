import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import '../../styles/surveyformreview.css';

const SurveyFormReview = ({formValues, history, submitSurvey, onCancel}) => {
    return(
        <div>
            <h1 className="rtitle">Review your Chops</h1>
            <div className="rfields">
                <div className="rfield"> 
                    <label className="rfieldlabel"> Skill</label>
                    <div className="rfieldvalue">{formValues.title}</div>
                </div>
                <div className="rfield"> 
                    <label className="rfieldlabel"> Question 1</label>
                    <div className="rfieldvalue">{formValues.S1}</div>
                    {/* {console.log(eval(formValues.S1))} */}
                </div>
                <div  className="rfield"> 
                <label className="rfieldlabel">Question 2</label>
                <div className="rfieldvalue">{formValues.S2}</div>
                </div>
                <div  className="rfield"> 
                <label className="rfieldlabel">Question 3</label>
                <div className="rfieldvalue">{formValues.S3}</div>
                </div>
            </div>
            <button onClick={onCancel} className="rcancel">Back</button>
            <button onClick={() => submitSurvey(formValues, history)} className="rsubmit">Send Survey</button>
        </div>
    );
};

function mapStatetoProps(state) {
    return { 
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStatetoProps, actions)(withRouter(SurveyFormReview));
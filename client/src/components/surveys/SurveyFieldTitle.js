//surveyfield contans logic to render single label and text input

import React from 'react';
import '../../styles/surveyfield.css';

export default (props) => {
    return (
        <div className="field">
          <label className="fieldlabel">{props.label}</label>
          <br />
          <input {...props.input} value={props.chosenSkill} readOnly="readOnly" className="fieldinput"/>
          <div className="errors">
           {props.meta.touched && props.meta.error}
          </div>
        </div>
    );
};

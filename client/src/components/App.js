import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/app.css';

import Landing from './Landing';
import Trial from './Trial';
import MyChops from './MyChops';
import Header from './Header';
import SkillNew from './SkillNew';
import SurveyNew from './surveys/SurveyNew';
import ChooseSkill from './ChooseSkill';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render () {
    return (
         <BrowserRouter>
          <div className="containerapp">
            <Header />
            <Route exact path='/trial' component={Trial} />
            <Route exact path="/" component={Landing} />
            <Route exact path='/mychops' component={MyChops} />
            <Route exact path="/skillnew" component={SkillNew}/>
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Route exact path='/chooseskill' component={ChooseSkill} />
          </div>
         </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
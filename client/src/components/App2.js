import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/app.css';

import Landing from './Landing';
import MyChops from './MyChops';
import Header from './Header';
import SkillNew from './SkillNew';
import SurveyNew from './surveys/SurveyNew';
import ChooseSkill from './ChooseSkill';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      zipcode: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  componentDidMount() {
    this.props.fetchUser();
  };

  onFormSubmit(zipcode){
    this.setState({ zipcode });
  };

  

  render () {
    return (
         <BrowserRouter>
          <div className="containerapp">
            <Header zipcode={this.state.zipcode}/>
            <Route exact path="/" component={Landing} />
            <Route exact path='/mychops' component={MyChops} />
            {/* <Link to={{ pathname: '/mychops', state: this.state.zipcode}}/> */}
            <Route exact path="/skillnew" render={()=><SkillNew zipcode={this.state.zipcode}/>}/>
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Route exact path='/chooseskill' render={()=><ChooseSkill onSubmit={this.onFormSubmit}/>}/>
          </div>
         </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
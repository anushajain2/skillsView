import { combineReducers } from 'redux';
import authReducer from './authReducer';
import skillReducer from './skillReducer';
import chopReducer from './chopReducer';
import { reducer as reduxFormReducer } from 'redux-form';
// import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    skill: skillReducer,
    chop: chopReducer,
    form: reduxFormReducer
});

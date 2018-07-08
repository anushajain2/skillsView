import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SKILL } from './types';
import { FETCH_CHOP } from './types';
import { SET_SKILL } from './types';
//action creaters
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSkill = () => async dispatch => {
    const res = await axios.get('/api/skills_for_user');
    dispatch({ type: FETCH_SKILL, payload: res.data});  
};

export const fetchChop = () => async dispatch => {
    const res = await axios.get('/api/chops_for_user');
    dispatch({ type: FETCH_CHOP, payload: res.data});  
};

export const submitSurvey = (values, history) => async dispatch => {
    console.log(values);
    const res = await axios.post('/api/surveys', values);
    history.push('/mychops');
    dispatch({ type: FETCH_USER, payload: res.data });
};

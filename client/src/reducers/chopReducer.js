import { FETCH_CHOP } from '../actions/types';

export default function(state = [], action){
    switch(action.type) {
        case FETCH_CHOP:
            return action.payload;
        default:
            return state;
    }
}
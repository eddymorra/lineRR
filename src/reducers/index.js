import { combineReducers } from 'redux';
import lines from './lines';
import search from './search';

const reducers = combineReducers({
    lines,
    search
});

export default reducers;

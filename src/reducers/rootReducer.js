import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import currentIdReducer from './currentIdReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  currentId: currentIdReducer
});

export default rootReducer;

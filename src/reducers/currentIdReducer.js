import { INCREMENT_ID } from '../actions/actionCreators';

export default function(state = 8, action) {
  switch (action.type) {
    case INCREMENT_ID:
      return state + 1;
    default:
      return state;
  }
}

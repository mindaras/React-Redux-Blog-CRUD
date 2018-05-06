import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../actions/actionCreators';

export default function(state = {
  0: { id: 0, title: 'Some title 0', body: 'Some body 0'},
  1: { id: 1, title: 'Some title 1', body: 'Some body 1'},
  2: { id: 2, title: 'Some title 2', body: 'Some body 2'},
  3: { id: 3, title: 'Some title 3', body: 'Some body 3'},
  4: { id: 4, title: 'Some title 4', body: 'Some body 4'},
  5: { id: 5, title: 'Some title 5', body: 'Some body 5'},
  6: { id: 6, title: 'Some title 6', body: 'Some body 6'},
  7: { id: 7, title: 'Some title 7', body: 'Some body 7'},
}, action) {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, [action.payload.id]: { id: action.payload.id, title: action.payload.title, body: action.payload.body } };
    case UPDATE_POST:
      return { ...state, [action.payload.id]: { id: action.payload.id, title: action.payload.title, body: action.payload.body } };
    case DELETE_POST:
      let newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}

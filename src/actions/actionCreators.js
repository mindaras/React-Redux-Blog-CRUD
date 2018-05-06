export const CREATE_POST = 'CREATE_POST',
             UPDATE_POST = 'UPDATE_POST',
             DELETE_POST = 'DELETE_POST',
             INCREMENT_ID = 'INCREMENT_ID';

export function createPost(id, title, body) {
  return {
    type: CREATE_POST,
    payload: { id, title, body }
  };
}

export function updatePost(id, title, body) {
  return {
    type: UPDATE_POST,
    payload: { id, title, body }
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: { id }
  };
}

export function incrementId() {
  return {
    type: INCREMENT_ID
  };
}

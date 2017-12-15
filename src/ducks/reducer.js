import axios from 'axios';

const initialState = {
  videos: []
}

const GET_RESULTS = 'GET_RESULTS';

// COMP 43D
export default function reducer(state=initialState, action) {
  switch (action.type) {
    // COMP 43E, 43K
    case GET_RESULTS + '_FULFILLED':
      return Object.assign({}, state, { videos: action.payload });
    default:
      return state;
  }
}

// COMP 43F
export function getVideos() {
  // COMP 44C, 44D
  const results = axios.get('http://localhost:4200/api/youtube')
                       .then(res => res.data);
  return {
    type: GET_RESULTS,
    payload: results
  }
}
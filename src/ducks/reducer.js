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
export function getVideos(term) {
  // COMP 44C, 44D
  const results = axios.get('http://localhost:4200/api/youtube/' + term)
                       .then(res => {
                          let results = res.data;
                          results.forEach(video => {
                            let newVideo = { search_term: term, youtube_id: video.id.videoId, video_title: video.snippet.title, descr: video.snippet.description, img: video.snippet.thumbnails.default.img, 'channel_title': video.snippet.channelTitle, 'channel_id': video.snippet.channelId, 'publish_time': video.snippet.publishedAt }
                            axios.post('http://localhost:4200/api/videos', newVideo);
                          })
                          return results;
                        });
  return {
    type: GET_RESULTS,
    payload: results
  }
}
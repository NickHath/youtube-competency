require('dotenv').config();
youtubeSearch = require('youtube-api-search');

module.exports = {
  getVideos: (req, res) => {
    // WILL BE COMP 76E
    youtubeSearch({ key: process.env.YOUTUBE_API_KEY, term: req.params.term }, videos => {
      res.status(200).send(videos);
    })
  },

  // COMP 70K - QUERY FUNCTIONS FROM MASSIVE
  addVideo: (req, res) => {
    const db = req.app.get('db');
    const { search_term, youtube_id, video_title, descr, img, channel_title, channel_id, publish_time } = req.body;
    db.add_video([search_term, youtube_id, video_title, descr, img, channel_title, channel_id, publish_time])
      .then(() => res.status(200).send('Added video'))
      .catch(err => res.status(500).send(err));
  },

  deleteVideo: (req, res) => {
    const db = req.app.get('db');
    // COMP 76D
    db.delete_video([req.params.video_id])
      .then(() => res.status(200).send('Deleted video'))
      .catch(err => res.status(500).send(err));
  },

  getPreviousVideos: (req, res) => {
    const db = req.app.get('db');
    db.get_all_videos([req.params.term])
      .then(videos => {
        console.log('DB', videos);
      })
  },

  updateVideo: (req, res) => {
    const db = req.app.get('db');
    const { video_id, newTitle } = req.body;
    db.update_video([video_id, newTitle])
      .then(() => res.status(200).send('Updated video'))
      .catch(err => res.status(500).send(err));
  }
}
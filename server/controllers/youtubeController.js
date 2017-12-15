require('dotenv').config();
youtubeSearch = require('youtube-api-search');

module.exports = {
  getVideos: (req, res) => {
    youtubeSearch({ key: process.env.YOUTUBE_API_KEY, term: 'snarky puppy' }, videos => {
      res.status(200).send(videos);
    })
  }
}
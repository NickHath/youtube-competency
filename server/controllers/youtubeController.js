require('dotenv').config();
youtubeSearch = require('youtube-api-search');

module.exports = {
  getVideos: (req, res) => {
    console.log('WE HIT THE ENDPOINT')
    youtubeSearch({ key: process.env.YOUTUBE_API_KEY, term: 'snarky puppy' }, videos => {
      res.status(200).send(videos);
    })
  }
}
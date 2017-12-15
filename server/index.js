require('dotenv').config();
const bodyParser = require('body-parser')
    , cors = require('cors')
    , express = require('express')
    , massive = require('massive')
    , youtubeController = require('./controllers/youtubeController');

// COMP 74C
const app = express();

app.use(cors());
// COMP 76F
app.use(bodyParser.json());

// COMP 70C
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))
                                      .catch(err => console.log(err));

// COMPS 74D-1, 74D-2, 74D-3, 74D-4, 76C
app.get('/api/youtube', youtubeController.getVideos);

app.post('/api/videos', youtubeController.addVideo);
app.put('/api/update', youtubeController.updateVideo);
app.delete('/api/videos/:video_id', youtubeController.deleteVideo);
app.get('/api/videos/:term', youtubeController.getPreviousVideos);

const PORT = 4200;
app.listen(PORT, console.log(`I'm listening... port: ${PORT}`));
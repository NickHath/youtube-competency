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

// COMP 74D-1
app.get('/api/youtube', youtubeController.getVideos);

const PORT = 4200;
app.listen(PORT, console.log(`I'm listening... port: ${PORT}`));
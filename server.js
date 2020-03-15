const express = require('express');
const mongoose = require('mongoose');
const Songs = require('./models/songs');
const app = express();

mongoose.connect('mongodb://localhost/musics', ({useNewUrlParser: true, useUnifiedTopology: true}))

app.set('view engine', 'ejs');

app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('index');
})

app.post('/songs', async (req, res) => {
  const song = new Songs({
    notes: req.body.songNotes
  })

  await song.save();

  res.json(song);
})

app.listen(5000, () => console.log('Listening on port 5000'));
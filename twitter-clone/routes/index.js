var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/posts', (req, res,) => {
  res.json(posts); 
});

// POST-rute for å lage et nytt innlegg
router.post('/posts', (req, res) => {
  const { username, content } = req.body; // Henter brukernavn og innhold fra forespørselen
     
  // Sjekk at både brukernavn og innhold er fylt ut
  if (!username || !content) {
    return res.status(400).json({ error: 'Brukernavn og innhold er påkrevd' });
  }

  // Lag et nytt innlegg som objekt
  const newPost = {
    id: posts.length + 1,
    username,
    content,
    timestamp: new Date().toLocaleString()
  };

  posts.push(newPost); // Legger til det nye innlegget i listen
  res.status(201).json(newPost); // Sender tilbake det nye innlegget
}); 
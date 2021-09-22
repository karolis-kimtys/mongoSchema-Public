const router = require('express').Router();
let Quote = require('../models/quotes.model');

router.route('/').get((req, res) => {
  Quote.find()
    .then((quotes) => res.json(quotes))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route('/add').post((req, res) => {
  const quote = req.body.quote;
  const author = req.body.author;
  const genre = req.body.genre;

  const newQuote = new Quote({ quote, author, genre });

  newQuote
    .save()
    .then(() => res.json(`Quote, ${quote} ,added!`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:idx').get((req, res) => {
  Quote.findOne({ idx: req.params.idx })
    .then((quote) => res.json(quote))
    .catch((err) =>
      res.status(400).json('Error while trying to find quote by ID: ' + err)
    );
});

module.exports = router;

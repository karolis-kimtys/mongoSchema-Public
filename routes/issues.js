const router = require('express').Router();
const Issue = require('../models/issues.model');

router.route('/').get((req, res) => {
  Issue.find()
    .then((issues) => res.json(issues))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const issue = req.body.issue;
  const info = req.body.info;

  const newIssue = new Issue({
    name,
    date,
    issue,
    info,
  });

  newIssue
    .save()
    .then(() => res.json(`Issue saved in DB!`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const issuesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

const Issues = mongoose.model('Issues', issuesSchema);

module.exports = Issues;

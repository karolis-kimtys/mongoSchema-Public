const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

const quotesRouter = require('./routes/quotes');
const tradesRouter = require('./routes/trades');
const issuesRouter = require('./routes/issues');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/quotes', quotesRouter);
app.use('/trades', tradesRouter);
app.use('/issues', issuesRouter);

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    ssl: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected!');
});

app.get('/', (req, res) => {
  res.send('Server running!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradesSchema = new Schema({
  instrument: {
    type: String,
    required: true,
  },
  interval: {
    type: String,
    required: true,
  },
  system: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  entryDate: {
    type: String,
    required: true,
  },
  entryTime: {
    type: String,
    required: true,
  },
  entryPrice: {
    type: Number,
    required: true,
  },
  entryTarget1: {
    type: Number,
    required: true,
  },
  entryTarget2: {
    type: Number,
    required: true,
  },
  entryTarget3: {
    type: Number,
    required: true,
  },
  stopLoss: {
    type: Number,
    required: true,
  },
  exitDate: {
    type: String,
    required: true,
  },
  exitTime: {
    type: String,
    required: true,
  },
  exitTarget1: {
    type: Number,
    required: true,
  },
  exitTarget2: {
    type: Number,
    required: true,
  },
  exitTarget3: {
    type: Number,
    required: true,
  },
  MAE: {
    type: Number,
    required: true,
  },
  pointX: {
    type: Number,
    required: true,
  },
  pointA: {
    type: Number,
    required: true,
  },
});

const Trades = mongoose.model("Trades", tradesSchema);

module.exports = Trades;

const router = require("express").Router();
const Trade = require("../models/trades.model");

router.route("/").get((req, res) => {
  Trade.find()
    .then((trades) => res.json(trades))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route("/add").post((req, res) => {
  const instrument = req.body.instrument;
  const interval = req.body.interval;
  const system = req.body.system;
  const entry = req.body.entry;
  const entryDate = req.body.entryDate;
  const entryTime = req.body.entryTime;
  const entryPrice = req.body.entryPrice;
  const entryTarget1 = req.body.entryTarget1;
  const entryTarget2 = req.body.entryTarget2;
  const entryTarget3 = req.body.entryTarget3;
  const stopLoss = req.body.stopLoss;

  const exitDate = req.body.exitDate;
  const exitTime = req.body.exitTime;
  const exitTarget1 = req.body.exitTarget1;
  const exitTarget2 = req.body.exitTarget2;
  const exitTarget3 = req.body.exitTarget3;

  const MAE = req.body.MAE;
  const pointX = req.body.pointX;
  const pointA = req.body.pointA;

  const newTrade = new Trade({
    instrument,
    interval,
    system,
    entry,
    entryDate,
    entryTime,
    entryPrice,
    entryTarget1,
    entryTarget2,
    entryTarget3,
    stopLoss,
    exitDate,
    exitTime,
    exitTarget1,
    exitTarget2,
    exitTarget3,
    MAE,
    pointX,
    pointA,
  });

  newTrade
    .save()
    .then(() => res.json(`Trade saved in DB!`))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

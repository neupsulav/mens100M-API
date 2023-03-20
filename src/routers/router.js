const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// handling post request
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handling get request
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

// handling get request for a individual
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMensIndividual = await MensRanking.findById(_id).sort({
      ranking: 1,
    });
    res.send(getMensIndividual);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update data
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete data
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

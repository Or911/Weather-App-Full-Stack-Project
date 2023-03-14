const express = require("express");
const router = express.Router();
const managementData = require("./../model/managementWether");

router.get("/weathers", (req, res) => {
  managementData.getDBLocations().then((data) => {
    console.log(data);
    res.status(200).send(data);
  });
});

router.get("/weather/:name", (req, res) => {
  let name = req.params.name;
  managementData.getWetherByLocations(name).then((data) => {
    res.status(200).send(data);
  });
});

router.post("/weather/", (req, res) => {
  let locationData = req.body;
  managementData.addLocation(locationData);
});

router.delete("/weather/:name", (req, res) => {
  let name = req.params.name;
  managementData.deleteDBLocation(name).then((text) => {
    res.status(201).send(text);
  });
});

module.exports = router;

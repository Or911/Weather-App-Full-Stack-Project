const express = require("express");
const router = express.Router();
const managementData = require("./../model/managementWether");

router.get("/weathers", (req, res) => {
  managementData.getDBLocations().then((data) => {
    res.status(200).send(data);
  });
});

router.get("/weather/:name", (req, res) => {
  let name = req.params.name;
  managementData.getWetherByLocations(name).then((data) => {
    if (data.error){
      res.status(data.error.status).send({error:data.statusText});
      return
    }
    res.status(200).send(data);
  })
});

router.post("/weather", (req, res) => {
  let locationData = req.body;
  if (locationData.name){
    managementData.addLocation(locationData);
    res.status(200).send({successes:"successes"})
    return
  }
  res.status(406).send({error:"save successes"})
});

router.delete("/weather/:name", (req, res) => {
  let name = req.params.name;
  managementData.deleteDBLocation(name).then((text) => {
    res.status(201).send({successes:"successes"});
  });
});

module.exports = router;

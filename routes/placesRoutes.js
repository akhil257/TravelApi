const express = require('express');
const placeController = require('./../controllers/placeController');

const router = express.Router();

router
  .route('/')
  .get(placeController.getAllPlaces)
  .post(placeController.createNewPlace);

module.exports = router;

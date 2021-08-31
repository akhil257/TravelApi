const express = require('express');
const locationController = require('./../controllers/locationController');

const router = express.Router();

// router.param('id', (req, res, next, val) => {
//   console.log(val);
//   console.log(req.params);
//   next();
// });
router.route('/get-stats').get(locationController.getLocationStats);
router.route('/deleteAll').get(locationController.deleteAll);

router
  .route('/')
  .get(locationController.getAllLocations)
  .post(locationController.createNewLocation);

router
  .route('/:id')
  .get(locationController.getLocation)
  .patch(locationController.updateLocation)
  .delete(locationController.deleteLocation);

module.exports = router;

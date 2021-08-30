const QueryUtil = require('../utils/queryUtil');
const Location = require('./../models/locationModel');
// const fs = require('fs');

// const locations = JSON.parse(fs.readFileSync(`${__dirname}/../dta.json`));

exports.getAllLocations = async (req, res) => {
  console.log(req.query);
  try {
    const query = new QueryUtil(Location.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const locations = await query.query;
    res.status(200).json({
      status: 'success',
      size: locations.length,
      data: locations
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error
    });
  }
};

exports.createNewLocation = async (req, res) => {
  console.log(req.body);
  try {
    const newLocation = await Location.create(req.body);
    res.status(200).json({ status: 'Success', data: newLocation });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error
    });
  }
};

exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      size: location.length,
      data: location
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error
    });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      size: location.length,
      data: location
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error
    });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      error
    });
  }
};

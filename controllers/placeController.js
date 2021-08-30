exports.getAllPlaces = (req, res) => {
  res.status(200).json({
    status: 'success'
  });
};

exports.createNewPlace = (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: 'Hello' });
};

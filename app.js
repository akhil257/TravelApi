const express = require('express');
const morgan = require('morgan');
const locationRouter = require('./routes/locationRoutes');
const placesRouter = require('./routes/placesRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
  //   console.log(res);
  res.status(404).json({ msg: 'Hello' });
});
app.use('/api/locations', locationRouter);
app.use('/api/places', placesRouter);
module.exports = app;

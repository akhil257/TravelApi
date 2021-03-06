const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required'],
    unique: true,
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State is Required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  summary: {
    type: String,
    required: [true, 'Summary Description is required'],
    trim: true
  },
  duration: Number,
  price: Number,
  cover: {
    type: String,
    required: [true, 'Cover Image is required'],
    trim: true
  },
  images: [String],
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;

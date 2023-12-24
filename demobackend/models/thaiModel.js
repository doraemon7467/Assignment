const mongoose = require('mongoose');

const OCRSchema = new mongoose.Schema({
  idNumber: String,
  name: String,
  lastName: String,
  dateOfBirth: Date,
  dateOfIssue: Date,
  dateOfExpiry: Date,
});

const OCRData = mongoose.model('OCRData', OCRSchema);

module.exports = OCRData;

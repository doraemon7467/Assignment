const multer = require('multer');
const path = require('path');
const express = require("express");
const router = express.Router();
const upload = require('../middleware/fileStorage')
const { getData , createData , updateData , deleteData } = require('../controllers/dataController');

router.route('/').get(getData);

router.route('/').post(upload.single('file'),createData);

router.route('/:id').put(updateData);

router.route('/:id').delete(deleteData);

module.exports = router;
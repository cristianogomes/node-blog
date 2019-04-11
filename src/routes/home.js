const express = require('express');
const router = express.Router();
const home = require('../app/home');

router.get('/', home.index);

router.get('/data', home.data);

module.exports = router;

const express = require('express');
const router = express.Router();

const timeSheet = require('../controllers/timeSheet');

router.post('/addTimeSheet',timeSheet.addTimeSheet);

 router.get('/getAllTimeSheets', timeSheet.getAllTimeSheets);


module.exports = router;

const express = require('express');
const router = express.Router();
const webapi = require('../controllers/webapi.controller');

router.get('/tahuns', webapi.getTahuns);
router.get('/triwulans', webapi.getTriwulans);
router.get('/ikm/:tahun/:triwulan', webapi.getDataIkm);

module.exports = router;
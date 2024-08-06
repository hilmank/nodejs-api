const express = require('express');
const router = express.Router();
const webapi = require('../controllers/webapi.controller');

router.get('/tahuns', webapi.getTahuns);
router.get('/triwulans', webapi.getTriwulans);
router.get('/ikm/:tahun/:triwulan', webapi.getDataIkm);

router.get('/front-offices', webapi.getFrontOffices);
router.get('/jenis-kelamins', webapi.getJenisKelamins);
router.get('/pendidikans', webapi.getPendidikans);
router.get('/kategori-institusi', webapi.getKategoriInstitusis);
router.get('/pertanyaans', webapi.getPertanyaans);

module.exports = router;
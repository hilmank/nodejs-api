const webapiService = require('../services/webapi.service');

async function getTahuns(req, res, next) {
    try {
        res.json(await webapiService.getTahuns());
    } catch (err) {
        console.error(`Error while getting data tahun`, err.message);
        next(err);
    }
}
async function getTriwulans(req, res, next) {
    try {
        res.json(await webapiService.getTriwulans());
    } catch (err) {
        console.error(`Error while getting data triwulan`, err.message);
        next(err);
    }
}
async function getDataIkm(req, res) {
    try {
        const { tahun, triwulan } = req.params;
        console.log('masuk getDataIkm ' + triwulan)
        res.json(await webapiService.getDataIkm(tahun, triwulan));
    } catch (err) {
        console.error(`Error while getting data ikm`, err.message);
    }
}
module.exports = {
    getTahuns,
    getTriwulans,
    getDataIkm
}
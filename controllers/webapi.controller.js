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
async function getDataIkm(req, res, next) {
    try {
        res.json(await webapiService.getDataIkm());
    } catch (err) {
        console.error(`Error while getting data ikm`, err.message);
        next(err);
    }
  }
module.exports = {
    getTahuns,
    getTriwulans,
    getDataIkm
}
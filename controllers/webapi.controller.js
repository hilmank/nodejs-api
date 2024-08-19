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
        res.json(await webapiService.getDataIkm(tahun, triwulan));
    } catch (err) {
        console.error(`Error while getting data ikm`, err.message);
    }
}
async function getFrontOffices(req, res) {
    try {
        res.json(await webapiService.getFrontOffices());
    } catch (err) {
        console.error(`Error while getting data j_customer`, err.message);
    }
}
async function getJenisKelamins(req, res) {
    try {
        res.json(await webapiService.getJenisKelamins());
    } catch (err) {
        console.error(`Error while getting data jeniskelamin`, err.message);
    }
}
async function getPendidikans(req, res) {
    try {
        res.json(await webapiService.getPendidikans());
    } catch (err) {
        console.error(`Error while getting data Pendidikans`, err.message);
    }
}
async function getKategoriInstitusis(req, res) {
    try {
        res.json(await webapiService.getKategoriInstitusis());
    } catch (err) {
        console.error(`Error while getting data KategoriInstitusis`, err.message);
    }
}
async function getPertanyaans(req, res) {
    try {
        res.json(await webapiService.getPertanyaans());
    } catch (err) {
        console.error(`Error while getting data m_question`, err.message);
    }
}
async function postKuisioner(req, res) {
    try {
        res.json(await webapiService.saveKuisioner(req))
    } catch (err) {
        console.error(`Error while getting data m_question`, err.message);
    }
}
module.exports = {
    getTahuns,
    getTriwulans,
    getDataIkm,
    getFrontOffices,
    getJenisKelamins,
    getPendidikans,
    getKategoriInstitusis,
    getPertanyaans,
    postKuisioner
}
const db = require('./db.service');
const sqlQuery = require('../utils/sql.util')
const Combo = require('../models/combo.model')
async function getTahuns(req, res, next) {
    try {
        let tahuns = [];
        let startDate = new Date();
        let currentYear = startDate.getFullYear();

        for (let tahun = currentYear - 5; tahun <= currentYear; tahun++) {
            tahuns.push(tahun);
        }

        return tahuns.reverse();
    } catch (err) {
        console.error(`Error while getting data tahun`, err.message);
        next(err);
    }
}
async function getTriwulans(req, res, next) {
    return [
        { kode: 1, nama: "Triwulan 1" },
        { kode: 2, nama: "Triwulan 2" },
        { kode: 3, nama: "Triwulan 3" },
        { kode: 4, nama: "Triwulan 4" }
    ];
}
async function getDataIkm(tahun, triwulan, next) {

    let minBulan, maxBulan;

    if (triwulan == 1) {
        minBulan = 1;
        maxBulan = 3;
    }
    else if (triwulan == 2) {
        minBulan = 4;
        maxBulan = 6;
    }
    else if (triwulan == 3) {
        minBulan = 7;
        maxBulan = 9;
    }
    else {
        minBulan = 10;
        maxBulan = 12;
    }
    try {
        let sql = sqlQuery.getSqlIkm();
        sql = sql.replaceAll("[TAHUN]", tahun);
        sql = sql.replaceAll("[MINBULAN]", minBulan);
        sql = sql.replaceAll("[MAXBULAN]", maxBulan);
        sql = sql.replaceAll("[TRIWULAN]", triwulan);
        console.log(sql);
        const result = await db.query(sql);
        return result.rows[0];

    } catch (error) {
        console.error(`Error while getting data ikm`, error.message);
    }
}

async function getFrontOffices() {
    try {
        let sql = sqlQuery.getSqlFrontOffices();
        const result = await db.query(sql);
        return result.rows;

    } catch (error) {
        console.error(`Error while getting data ikm`, error.message);
    }
}
async function getJenisKelamins() {
    return [
        { kode: 'MALE', nama: "Laki-laki" },
        { kode: 'FEMALE', nama: "Perempuan" }
    ];
}
async function getPendidikans() {
    return [
        { kode: 'SMA atau sederajat', nama: "SMA atau sederajat" },
        { kode: 'Diploma 3 (D-3)', nama: "Diploma 3 (D-3)" },
        { kode: 'Strata 1 (S-1)/Diploma 4 (D-4)', nama: "Strata 1 (S-1)/Diploma 4 (D-4)" },
        { kode: 'Strata 2 (S-2)', nama: "Strata 2 (S-2)" },
        { kode: 'Strata 3 (S-3)', nama: "Strata 3 (S-3)" }
    ];
}
async function getKategoriInstitusis() {
    return [
        { kode: 'Pelaku Usaha UMK', nama: "Pelaku Usaha UMK" },
        { kode: 'Pelaku Usaha Non UMK', nama: "Pelaku Usaha Non UMK" },
        { kode: 'Kementrian/Lembaga', nama: "Kementrian/Lembaga" },
        { kode: 'Pemerintah Daerah', nama: "Pemerintah Daerah" },
        { kode: 'Notaris', nama: "Notaris" },
        { kode: 'Konsultan Hukum', nama: "Konsultan Hukum" },
    ];
}
async function getPertanyaans() {
    try {
        let sql = sqlQuery.getSqlPertayaan();
        const result = await db.query(sql);
        return result.rows;

    } catch (error) {
        console.error(`Error while getting data ikm`, error.message);
    }
}
async function saveKuisioner(res) {
    try {
        console.log(res.body);
        return "suksesssss";
    } catch (error) {
        console.error(`Error while save data kuisioner`, error.message);

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
    saveKuisioner
}
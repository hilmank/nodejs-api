const db = require('./db.service');
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
    try {

        let minBulan, maxBulan;

        if (triwulan === 1) {
            minBulan = 1;
            maxBulan = 3;
        }
        else if (triwulan === 2) {
            minBulan = 4;
            maxBulan = 6;
        }
        else if (triwulan === 3) {
            minBulan = 7;
            maxBulan = 9;
        }
        else {
            minBulan = 10;
            maxBulan = 12;
        }

        const query = " WITH rekap_triwulan AS (" +
            "     SELECT" +
            "         d.name AS nama_element," +
            "         count(c.id_element) jumlah_unsur," +
            "         sum(c.value) jumlah_nilai_paramater," +
            "         sum(c.value) / count(c.id_element) :: decimal nilai_rata_rata_parameter," +
            "         (sum(c.value) / count(c.id_element) :: decimal) * 0.11 nilai_indeks_parameter" +
            "     FROM" +
            "         j_user a" +
            "         JOIN j_questionnaire b ON a.id = b.created_by_user_id" +
            "         JOIN pv_questionnaire c ON b.id = c.id_questionnaire" +
            "         JOIN m_element d ON c.id_element = d.id" +
            "     WHERE" +
            "         date_part('year', a.created_at) = $1" +
            "         AND date_part('month', a.created_at) BETWEEN $2 AND $3" +
            "     GROUP BY" +
            "         nama_element" +
            " )" +
            " SELECT" +
            "     json_build_object(" +
            "         'data'," +
            "         jsonb_agg(" +
            "             json_build_object(" +
            "                 'element'," +
            "                 nama_element," +
            "                 'nilai_rata_rata_parameter'," +
            "                 nilai_rata_rata_parameter," +
            "                 'indeks'," +
            "                 CASE" +
            "                     WHEN nilai_rata_rata_parameter BETWEEN 1.00" +
            "                     AND 1.75 THEN 'Tidak Baik'" +
            "                     WHEN nilai_rata_rata_parameter BETWEEN 1.76" +
            "                     AND 2.50 THEN 'Kurang Baik'" +
            "                     WHEN nilai_rata_rata_parameter BETWEEN 2.51" +
            "                     AND 3.25 THEN 'Baik'" +
            "                     ELSE 'Sangat Baik'" +
            "                 END" +
            "             )" +
            "         )," +
            "         'nilai_ikm'," +
            "         sum(nilai_indeks_parameter)," +
            "         'status_ikm'," +
            "         CASE" +
            "             WHEN sum(nilai_indeks_parameter) BETWEEN 0.00" +
            "             AND 1.75 THEN 'Tidak Baik'" +
            "             WHEN sum(nilai_indeks_parameter) BETWEEN 1.76" +
            "             AND 2.50 THEN 'Kurang Baik'" +
            "             WHEN sum(nilai_indeks_parameter) BETWEEN 2.51" +
            "             AND 3.25 THEN 'Baik'" +
            "             ELSE 'Sangat Baik'" +
            "         END," +
            "         'nilai_skm'," +
            "         sum(nilai_indeks_parameter) * 25," +
            "         'status_skm'," +
            "         CASE" +
            "             WHEN sum(nilai_indeks_parameter) * 25 BETWEEN 0.00" +
            "             AND 64.99 THEN 'Tidak Baik'" +
            "             WHEN sum(nilai_indeks_parameter) * 25 BETWEEN 65.00" +
            "             AND 76.60 THEN 'Kurang Baik'" +
            "             WHEN sum(nilai_indeks_parameter) * 25 BETWEEN 76.61" +
            "             AND 88.30 THEN 'Baik'" +
            "             ELSE 'Sangat Baik'" +
            "         END," +
            "         'tahun'," + tahun + "," +
            "         'triwulan', ' Triwulan " + triwulan + "'" +
            "     ) AS ret" +
            " FROM" +
            "     rekap_triwulan;";

        const result = await db.query(query, [tahun, minBulan, maxBulan]);
        return result.rows[0];
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
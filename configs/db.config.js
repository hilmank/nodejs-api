require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: 'postgres',
  pool: {
    max: 5, // maksimum koneksi di dalam pool
    min: 0, // minimum koneksi di dalam pool
    acquire: 30000, // waktu maksimum dalam ms untuk mengakuisisi koneksi
    idle: 10000 // waktu maksimum dalam ms koneksi dapat tetap idle
  }
};

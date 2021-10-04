const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Nama: "M Alif",
    TanggalLahir: "29-12-1995",
    JenisKelamin: "Laki-Laki",
    Hobi: "Membaca Buku",
  });
});

module.exports = router;

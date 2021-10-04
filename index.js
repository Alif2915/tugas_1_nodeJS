const express = require('express');
const app = express();
const port = 8080;
const apiRouter = require('./Datasiswa');

app.get('/', (req, res) => {
  res.send('Selamat Datang Di Data Center Siswa Indonesia.');
});

app.use("/Datasiswa", apiRouter);

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at port: http://localhost:${PORT}`);
});

const express = require("express");
require("./db/connection");
const MensRanking = require("./models/mens");
const router = require("./routers/router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

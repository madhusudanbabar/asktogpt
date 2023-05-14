const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => res.send("hello world"));

app.listen(PORT, "0.0.0.0", () => console.log(`server running on ${PORT}`));

module.exports = app;

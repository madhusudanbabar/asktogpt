const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const assistant = require("./controllers/assistant").assistant;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => res.send("hello world"));
app.use("/fulfilment", assistant);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`server running on http://localhost:${PORT}`)
);

module.exports = app;

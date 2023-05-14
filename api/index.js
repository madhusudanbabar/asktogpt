const express = require("express");
const bodyParser = require("body-parser");
const { openai } = require("./openai/index");
require("dotenv").config();

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
app.get("/test", (req, res) => {
  openai
    .createCompletion({
      prompt: "hello world",
      model: "gpt-3.5-turbo",
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((e) => {
      console.error(e);
      res.status(e.response.status);
      res.send(e.response.statusText);
    });
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`server running on http://localhost:${PORT}`)
);

module.exports = app;

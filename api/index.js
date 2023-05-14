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
app.get("/test", async (req, res) => {
  try {
    const data = await openai.createCompletion({
      prompt: "explain javascript to me",
      model: "gpt-3.5-turbo",
    });
    console.log(data);
  } catch (e) {
    console.error(e.response);
    res.status(500);
    res.send(Object.keys(e));
  }
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`server running on http://localhost:${PORT}`)
);

module.exports = app;

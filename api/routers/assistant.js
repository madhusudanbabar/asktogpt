const router = require("express").Router();
const { assistant } = require("../controllers/assistant");
module.exports = () => {
  router.get("/", assistant);
};

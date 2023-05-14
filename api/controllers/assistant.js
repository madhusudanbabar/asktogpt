const { conversation } = require("@assistant/conversation");
const app = conversation();

app.handle("test_handle", (conv) => {
  console.log(conv);
  conv.add("Hey, finally you did it?");
});

module.exports = { assistant: app };

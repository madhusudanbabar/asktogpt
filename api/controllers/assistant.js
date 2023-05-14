const { conversation } = require("@assistant/conversation");
const app = conversation();
const { openai } = require("../openai/index");

app.handle("test_handle", (conv) => {
  console.log(conv);
  openai
    .createCompletion({
      prompt: conv.intent.query,
    })
    .then((data) => {
      console.log(data);
      conv.add(data);
    })
    .catch((e) => {
      console.error(e);
      conv.add(
        `uh, oh! Something went wrong, error: ${e.response.status}, ${e.response.statusText}`
      );
    });
});

module.exports = { assistant: app };

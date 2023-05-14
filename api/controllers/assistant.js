const { conversation } = require("@assistant/conversation");
const app = conversation();
const { openai } = require("../openai/index");

app.handle("test_handle", async (conv) => {
  console.log(conv);
  try {
    const data = await openai.createCompletion({
      prompt: conv.intent.query,
    });
    console.log(data);
    conv.add(data);
  } catch (e) {
    console.error(e);
    conv.add(
      `uh, oh! Something went wrong, error: ${e.response.status}, ${e.response.statusText}`
    );
  }
});

module.exports = { assistant: app };

require('dotenv').config();
const express = require('express');
const { getOpenAiResponse } = require('./openAi');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await getOpenAiResponse(`You are a knowledgeable assistant for a Japanese tattoo meanings app. Answer the following question: ${message}`);
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing chat message');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

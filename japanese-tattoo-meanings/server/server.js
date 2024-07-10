require('dotenv').config();
const express = require('express');
const { getOpenAiResponse } = require('../client/utils/openAi');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/suggest', async (req, res) => {
  const { theme } = req.body;

  try {
    console.log(`received request with theme: ${theme}`);
    const response = await getOpenAiResponse(`suggest tattoo ideas related to the theme: ${theme}. Do not suggest Japanese characters. Only suggest gods/goddesses, supernatural figures, flora, fauna, Suikoden, and folklore figures. Here are some examples of acceptable suggestions: 
      - Amaterasu (goddess of the sun)
      - Kitsune (supernatural fox)
      - Sakura (cherry blossoms)
      - Kirin (mythical creature)
      - Byakkotai (group of teenage samurai)
      Do not include any Japanese kanji or characters.`);

    // Filter suggestions to exclude Japanese characters
    const filteredSuggestions = response.split('\n').filter(suggestion => {
      const lowerSuggestion = suggestion.toLowerCase();
      return !lowerSuggestion.includes('character') &&
             !lowerSuggestion.includes('kanji') &&
             !lowerSuggestion.includes('japanese character') &&
             !lowerSuggestion.match(/[一-龯]/);  // regex to match kanji characters
    });

    res.json({ reply: filteredSuggestions.join('\n') });
  } catch (error) {
    console.error('error in /suggest endpoint:', error);
    res.status(500).send('Error processing suggestion request');
  }
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

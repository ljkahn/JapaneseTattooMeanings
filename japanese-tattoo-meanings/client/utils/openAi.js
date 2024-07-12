const axios = require('axios');

async function getOpenAiResponse(prompt) {
  try {
    console.log('sending request to openai with prompt:', prompt);
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'you are a knowledgeable assistant for a japanese tattoo meanings app.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1500,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('received response from openai:', response.data);
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (error.response) {
      console.error('error response data:', error.response.data);
      console.error('error response status:', error.response.status);
      console.error('error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('error request data:', error.request);
    } else {
      console.error('general error message:', error.message);
    }
    throw error;
  }
}

module.exports = { getOpenAiResponse };

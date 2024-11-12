import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

console.log('API Key from @env:', OPENAI_API_KEY); // Check if API key is being read

async function getOpenAiResponse(prompt) {
  if (!OPENAI_API_KEY) {
    throw new Error('API key is undefined. Please check your .env configuration.');
  }

  try {
    console.log('Sending request to OpenAI with prompt:', prompt);

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a knowledgeable assistant for a Japanese tattoo meanings app focusing on deities, fauna, flora, folklore, suikoden, and supernatural icons.',
          },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('OpenAI Response:', response.data);
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
    } else if (error.request) {
      console.error('Error request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

export async function getSuggestions(prompt) {
  return await getOpenAiResponse(prompt);
}

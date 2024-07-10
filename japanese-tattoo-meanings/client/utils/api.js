import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const getSuggestions = async (theme) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/suggest`, {
      theme,
    });
    return response.data.reply;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
};

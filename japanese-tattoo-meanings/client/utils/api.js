import axios from 'axios';

export const createUserProfile = async ({ username, password, role }) => {
  const response = await axios.post('http://localhost:4001/graphql', {
    query: `
      mutation {
        register(username: "${username}", password: "${password}", role: "${role}") {
          token
        }
      }
    `
  });
  return response.data.data.register.token;
};

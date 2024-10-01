// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// create the context
export const AuthContext = createContext();

// create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:4001/graphql', {
        query: `
          mutation {
            login(username: "${username}", password: "${password}")
          }
        `,
      });

      const token = response.data.data.login;
      if (token) {
        setUserToken(token);
        setIsLoggedIn(true);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  const logout = () => {
    setUserToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

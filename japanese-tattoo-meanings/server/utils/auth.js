const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

const authMiddleware = (token) => {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token.split(' ')[1], secret);
  } catch (err) {
    console.log('Token is not valid');
    return null;
  }
};

module.exports = authMiddleware;

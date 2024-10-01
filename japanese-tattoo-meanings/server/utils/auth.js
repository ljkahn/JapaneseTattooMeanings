const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
const token = req.headers.authorization || '';
console.log('Token received:', token);  // Add this line
if (token) {
  try {
    const artist = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    return { artist };
  } catch (err) {
    console.error(err);
  }
}
};

module.exports = authMiddleware;

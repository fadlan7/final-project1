const jwt = require('jsonwebtoken');
const SECRET_KET = 'inirahasia';

function generateToken(payload) {
  const token = jwt.sign(payload, SECRET_KET);
  return token;
}

function verifyToken(token) {
  const decode = jwt.verify(token, SECRET_KET);
  return decode;
}

module.exports = {
  generateToken,
  verifyToken,
};

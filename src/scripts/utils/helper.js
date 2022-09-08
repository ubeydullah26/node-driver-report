const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

const generateAccessToken = (user) => {
  return jwt.sign({name: user.email, ...user}, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1w',
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({name: user.email, ...user}, process.env.JWT_REFRESH_SECRET);
};

module.exports = {
    passwordHash,
    comparePassword,
    generateAccessToken,
    generateRefreshToken,
}
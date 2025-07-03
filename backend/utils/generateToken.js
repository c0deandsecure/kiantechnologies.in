// backend/utils/generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '64h', // Token expires in 1 hour
  });
};

export default generateToken;
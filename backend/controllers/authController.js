// backend/controllers/authController.js
import asyncHandler from 'express-async-handler';
import Admin from '../models/Admin.js';
import generateToken from '../utils/generateToken.js'; // You'll create this utility

// @desc    Auth admin & get token
// @route   POST /api/auth/admin-login
// @access  Public
export const authAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
      message: 'Login successful!',
    });
  } else {
    res.status(401);
    throw new Error('Invalid username or password');
  }
});

// @desc    Register a new admin (for initial setup only, remove/secure later)
// @route   POST /api/auth/register-admin
// @access  Public (for initial setup)
export const registerAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const adminExists = await Admin.findOne({ username });

  if (adminExists) {
    res.status(400);
    throw new Error('Admin already exists');
  }

  const admin = await Admin.create({
    username,
    password,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
      message: 'Admin registered successfully. Please delete this route after initial setup.'
    });
  } else {
    res.status(400);
    throw new Error('Invalid admin data');
  }
});
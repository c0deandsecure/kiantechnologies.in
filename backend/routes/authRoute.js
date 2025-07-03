// backend/routes/authRoute.js
import express from 'express';
import { authAdmin, registerAdmin } from '../controllers/authController.js';

const router = express.Router();

router.post('/register-admin', registerAdmin);
router.post('/admin-login', authAdmin);
// This route is for initial admin creation.
// REMOVE or highly secure this route after creating your first admin user in production!


export default router;
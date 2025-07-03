// backend/routes/demoRegistrationRoutes.js
import express from 'express';
import {
    submitDemoRegistration,
    getAllDemoRegistrations,
    deleteDemoRegistration,
    getDemoRegistrationCount
} from '../controllers/demoRegistrationController.js';
import { protect } from '../middleware/authMiddleware.js'; // Assuming authMiddleware.js exists

const router = express.Router();

// Public route for submitting demo/contact forms
router.post('/', submitDemoRegistration); // Renamed from '/demo-register' to '/' for cleaner path: /api/demo/

// Admin protected routes
router.get('/admin-registrations', protect, getAllDemoRegistrations);
router.delete('/admin-registrations/:id', protect, deleteDemoRegistration);
router.get('/count', protect, getDemoRegistrationCount);

export default router;
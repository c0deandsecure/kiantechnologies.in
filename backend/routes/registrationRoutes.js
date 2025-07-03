// backend/routes/registrationRoutes.js
import { registerStudent, getAllInternshipRegistrations, deleteInternshipRegistration, getInternshipRegistrationCount } from '../controllers/registrationController.js';
import upload from '../middleware/uploadMiddleware.js'; // Assuming your multer middleware is named uploadMiddleware.js
import { Router } from 'express';
import { protect } from '../middleware/authMiddleware.js'; // Assuming authMiddleware.js exists

const router = Router();

// Public route for student registration with CV upload
router.post('/', upload.single('cv'), registerStudent); // Renamed from '/register' to '/' for cleaner path: /api/registration/

// Admin protected routes
router.get('/admin-registrations', protect, getAllInternshipRegistrations);
router.delete('/admin-registrations/:id', protect, deleteInternshipRegistration);
router.get('/count', protect, getInternshipRegistrationCount);

export default router;
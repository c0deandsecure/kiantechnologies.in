// backend/controllers/demoRegistrationController.js
import DemoRegistration from '../models/DemoRegistration.js';
import asyncHandler from 'express-async-handler'; // Ensure you have this installed: npm install express-async-handler

export const submitDemoRegistration = asyncHandler(async (req, res) => {
    const { name, phone, email, course, date, message } = req.body;

    // Determine if it's a "Demo Registration" or "General Contact" submission
    const isDemoRegistration = !!course && !!date; // True if both are present

    // --- Basic Validation ---
    // For ALL submissions (both demo and general contact), name, phone, email are required.
    // If it's a demo registration, course and date are also required.
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Name, Phone, and Email are required fields.');
    }

    if (isDemoRegistration) {
        // Additional validation specifically for Demo Registration
        if (!course || !date) {
            res.status(400);
            throw new Error('For demo registration, Course and Date are also required.');
        }
    }

    // Create a new demo registration entry
    const newDemoRegistration = new DemoRegistration({
        name,
        phone,
        email,
        // Provide default values for course and date if they are not present (from general contact form)
        course: course || 'General Inquiry', // Default course
        date: date || new Date(),            // Default date to now if not provided
        message: message || ''              // Message is always optional
    });

    await newDemoRegistration.save();

    let successMessage = 'Request submitted successfully!';
    if (isDemoRegistration) {
        successMessage = 'Demo session request submitted successfully!';
    } else {
        successMessage = 'Your message has been sent successfully!';
    }

    res.status(201).json({ message: successMessage });

});


// @desc    Get all demo registrations
// @route   GET /api/demo/admin-registrations
// @access  Private (Admin only)
export const getAllDemoRegistrations = asyncHandler(async (req, res) => {
    const registrations = await DemoRegistration.find({}).sort({ createdAt: -1 });
    res.json(registrations);
});


// @desc    Delete a demo registration
// @route   DELETE /api/demo/admin-registrations/:id
// @access  Private (Admin only)
export const deleteDemoRegistration = asyncHandler(async (req, res) => {
    const registration = await DemoRegistration.findById(req.params.id);

    if (registration) {
        await DemoRegistration.deleteOne({ _id: registration._id }); // Use deleteOne
        res.json({ message: 'Demo registration removed successfully' });
    } else {
        res.status(404);
        throw new Error('Demo registration not found');
    }
});


// @desc    Get count of all demo registrations
// @route   GET /api/demo/count
// @access  Private (Admin only)
export const getDemoRegistrationCount = asyncHandler(async (req, res) => {
    const count = await DemoRegistration.countDocuments();
    res.json({ count });
});
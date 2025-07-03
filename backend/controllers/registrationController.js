// backend/controllers/registrationController.js
import Registration from '../models/Registration.js';
import cloudinary from '../lib/cloudinary.js'; // Ensure path is correct
import asyncHandler from 'express-async-handler'; // Ensure you have this installed: npm install express-async-handler

// Helper function for Cloudinary upload
const uploadToCloudinary = (buffer, name) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: 'internship-registrations',
                resource_type: 'auto',
                public_id: `${Date.now()}-${name.replace(/\s+/g, '_')}`,
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );
        uploadStream.end(buffer);
    });
};

export const registerStudent = asyncHandler(async (req, res) => {
    // Destructure required fields from request body
    const {
        name, email, phone, dob, gender, guardian, state, country,
        qualification, college, university, year, domain,
        linkedIn, whatsapp, source, referral = ''  // Default empty string for optional field
    } = req.body;

    // Validate required fields
    const requiredFields = [
        name, email, phone, dob, gender, guardian, state, country,
        qualification, college, university, year, domain,
        linkedIn, whatsapp, source
    ];

    if (requiredFields.some(field => !field)) {
        res.status(400);
        throw new Error('All fields are mandatory.');
    }

    // Validate file upload
    if (!req.file) {
        res.status(400);
        throw new Error('CV file is required.');
    }

    // Check if student with this email already exists
    const studentExists = await Registration.findOne({ email });
    if (studentExists) {
        res.status(400);
        throw new Error('Email already registered.');
    }

    // Upload CV to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer, name);
    const cvUrl = result.secure_url;

    // Create and save registration
    const newRegistration = new Registration({
        name,
        email,
        phone,
        dob,
        gender,
        guardian,
        state,
        country,
        qualification,
        college,
        university,
        year,
        domain,
        linkedIn,
        whatsapp,
        source,
        referral,
        cv: cvUrl
    });

    await newRegistration.save();

    // Successful response
    res.status(201).json({
        message: 'Internship registration successful!',
       
    });

});


// @desc    Get all internship registrations
// @route   GET /api/registration/admin-registrations
// @access  Private (Admin only)
export const getAllInternshipRegistrations = asyncHandler(async (req, res) => {
    const registrations = await Registration.find({}).sort({ createdAt: -1 });
    res.json(registrations);
});


// @desc    Delete an internship registration
// @route   DELETE /api/registration/admin-registrations/:id
// @access  Private (Admin only)
export const deleteInternshipRegistration = asyncHandler(async (req, res) => {
    const registration = await Registration.findById(req.params.id);

    if (registration) {
        await Registration.deleteOne({ _id: registration._id }); // Use deleteOne
        res.json({ message: 'Internship registration removed successfully' });
    } else {
        res.status(404);
        throw new Error('Internship registration not found');
    }
});


// @desc    Get count of all internship registrations
// @route   GET /api/registration/count
// @access  Private (Admin only)
export const getInternshipRegistrationCount = asyncHandler(async (req, res) => {
    const count = await Registration.countDocuments();
    res.json({ count });
});
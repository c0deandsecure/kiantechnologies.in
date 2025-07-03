
import mongoose from 'mongoose';

const demoRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    course: { type: String, required: true, trim: true },
    date: { type: Date, required: true }, // Store date as a Date object
    message: { type: String, trim: true } // Message is optional
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

export default mongoose.model('DemoRegistration', demoRegistrationSchema);
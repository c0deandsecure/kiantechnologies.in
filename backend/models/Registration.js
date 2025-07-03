import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  state: { type: String, required: true },
  college: { type: String, required: true },
  qualification: { type: String, required: true },
  domain: { type: String, required: true },
  linkedIn: { type: String, required: true },
  phone: { type: String, required: true },
  guardian: { type: String, required: true },
  gender: { type: String, required: true },
  country: { type: String, default: 'India' },
  university: { type: String, required: true },
  year: { type: String, required: true },
  source: { type: String, required: true },
  whatsapp: { type: String, required: true },
  referral: { type: String },
  cv: { type: String }, // file path or filename
}, { timestamps: true });

export default mongoose.model('Registration', registrationSchema);

// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './lib/db.js';

// Import all your routes
import registrationRoutes from './routes/registrationRoutes.js';
import demoRegistrationRoutes from './routes/demoRegistrationRoutes.js';
import authRoutes from './routes/authRoute.js';
import blogRoutes from './routes/blogRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/demo', demoRegistrationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);


// Simple root endpoint
app.get('/', (req, res) => {
    res.send('Internship Registration API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
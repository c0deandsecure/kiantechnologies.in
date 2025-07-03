// backend/routes/blogRoute.js
import express from 'express';
import {
  createBlogPost,
  getAllBlogPostsForAdmin,
  getPublishedBlogPosts,
  getBlogPostBySlug,
  getBlogPostByIdForAdmin,
  updateBlogPost,
  deleteBlogPost,
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getPublishedBlogPosts); // Get all published blogs
router.get('/post/:slug', getBlogPostBySlug); // Get a single published blog by slug



// Public routes for fetching blog posts
// Admin protected routes (require authentication)
// Use upload.single('image') for image uploads
router.post('/', protect, upload.single('image'), createBlogPost);
router.get('/admin-posts', protect, getAllBlogPostsForAdmin); // Get all blog posts (published & unpublished) for admin
router.get('/admin-posts/:id', protect, getBlogPostByIdForAdmin); // Get single blog post by ID for admin editing
router.put('/:id', protect, upload.single('image'), updateBlogPost); // Update blog post with optional new image upload
router.delete('/:id', protect, deleteBlogPost); // Delete blog post



export default router;
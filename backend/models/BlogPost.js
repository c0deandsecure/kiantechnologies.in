// backend/models/BlogPost.js
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Admin', // Or link to a User model if you have one
  },
  image: {
    type: String, // URL to the blog post's main image (Cloudinary URL)
    required: false, // Make it optional for now, but usually good to have
  },
  isPublished: {
    type: Boolean,
    default: false, // Blog posts are initially unpublished
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  slug: { // For user-friendly URLs
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Pre-save hook to generate slug
blogPostSchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }
  next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
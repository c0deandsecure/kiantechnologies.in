// backend/controllers/blogController.js
import BlogPost from '../models/BlogPost.js';
import cloudinary from '../lib/cloudinary.js';
import asyncHandler from 'express-async-handler';

const uploadBlogImageToCloudinary = (buffer, title) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: 'blog-images',
        resource_type: 'image',
        public_id: `${Date.now()}-${title.replace(/\s+/g, '_')}`,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });
};

export const createBlogPost = asyncHandler(async (req, res) => {
    const { title, content, author, isPublished, tags } = req.body;
    let imageUrl = '';

    if (!title || !content) {
      res.status(400);
      throw new Error('Title and content are required for a blog post.');
    }

    if (req.file) {
      const result = await uploadBlogImageToCloudinary(req.file.buffer, title);
      imageUrl = result.secure_url;
    }

    const newBlogPost = new BlogPost({
      title,
      content,
      author,
      image: imageUrl,
      isPublished: isPublished === 'true' || isPublished === true,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
    });

    await newBlogPost.save();
    res.status(201).json({ message: 'Blog post created successfully!', blogPost: newBlogPost });
});

export const getAllBlogPostsForAdmin = asyncHandler(async (req, res) => {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(blogPosts);
});

export const getPublishedBlogPosts = asyncHandler(async (req, res) => {
    const blogPosts = await BlogPost.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(blogPosts);
});

export const getBlogPostBySlug = asyncHandler(async (req, res) => {
    const blogPost = await BlogPost.findOne({ slug: req.params.slug, isPublished: true });
    if (!blogPost) {
      res.status(404);
      throw new Error('Blog post not found or not published.');
    }
    res.json(blogPost);
});

export const getBlogPostByIdForAdmin = asyncHandler(async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) {
      res.status(404);
      throw new Error('Blog post not found.');
    }
    res.json(blogPost);
});

export const updateBlogPost = asyncHandler(async (req, res) => {
    const { title, content, author, isPublished, tags } = req.body;
    let imageUrl = req.body.currentImageUrl || '';

    if (req.file) {
      const result = await uploadBlogImageToCloudinary(req.file.buffer, title);
      imageUrl = result.secure_url;
    }

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        author,
        image: imageUrl,
        isPublished: isPublished === 'true' || isPublished === true,
        tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      },
      { new: true, runValidators: true }
    );

    if (!updatedBlogPost) {
      res.status(404);
      throw new Error('Blog post not found.');
    }
    res.json({ message: 'Blog post updated successfully!', blogPost: updatedBlogPost });
});

export const deleteBlogPost = asyncHandler(async (req, res) => {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedBlogPost) {
      res.status(404);
      throw new Error('Blog post not found.');
    }
    res.json({ message: 'Blog post deleted successfully!' });
});
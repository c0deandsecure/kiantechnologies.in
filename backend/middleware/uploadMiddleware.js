// backend/middleware/uploadMiddleware.js
import multer from 'multer';

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'cv') {
    const allowedCVTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (allowedCVTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type for CV. Only PDF, DOC, and DOCX files are allowed.'), false);
    }
  } else if (file.fieldname === 'image') {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type for image. Only JPEG, PNG, GIF, WEBP images are allowed.'), false);
    }
  } else {
    cb(null, true); // Allows other file types by default
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit for all files
  fileFilter,
});

export default upload;
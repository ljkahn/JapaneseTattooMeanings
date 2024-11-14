const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');

router.post('/upload', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: 'profile_pictures',
    });
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;

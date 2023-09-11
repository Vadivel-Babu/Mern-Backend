const express = require('express');
const router = express.Router();
const { postImage,getImages,deleteImages } = require("../controllers/galleryController");

router.post('/', postImage);
router.get('/', getImages)
router.delete('/:id',deleteImages)

module.exports = router;
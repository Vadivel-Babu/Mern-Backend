const galleryModel = require("../models/GalleryModel");
const mongoose = require('mongoose');

// post
const postImage = async (req, res) => {
  const { label, url } = req.body;
  try {
    const Image = await galleryModel.create({ label, url })
    res.status(200).json(Image);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//get
const getImages = async (req, res) => {
  try {
    const images = await galleryModel.find({});
    res.status(200).json(images);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

const deleteImages = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found" });
  }
  try {
    const image = await galleryModel.findByIdAndDelete(id);
    res.status(200).json(image);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = { postImage, getImages,deleteImages };
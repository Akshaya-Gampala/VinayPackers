const express = require("express");
const mongoose = require("mongoose");
const Gallery = require("../models/Gallery");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get active gallery photos (public)
router.get("/", async (req, res) => {
  try {
    const photos = await Gallery.find({ isActive: true })
      .sort({ createdAt: -1 });

    res.json(photos);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch gallery photos."
    });
  }
});

// Add gallery photo (admin only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, imageUrl, category, description } = req.body;

    if (!title || !imageUrl) {
      return res.status(400).json({
        message: "Title and image URL are required."
      });
    }

    const photo = await Gallery.create({
      title,
      imageUrl,
      category,
      description
    });

    res.status(201).json({
      message: "Gallery photo added successfully!",
      photo
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to add gallery photo."
    });
  }
});

// Update gallery photo (admin only)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid photo ID." });
    }

    const photo = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!photo) {
      return res.status(404).json({
        message: "Photo not found."
      });
    }

    res.json({
      message: "Gallery photo updated successfully!",
      photo
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to update photo."
    });
  }
});

// Delete gallery photo (admin only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid photo ID." });
    }

    const photo = await Gallery.findByIdAndDelete(req.params.id);

    if (!photo) {
      return res.status(404).json({
        message: "Photo not found."
      });
    }

    res.json({
      message: "Gallery photo deleted successfully!"
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete photo."
    });
  }
});

module.exports = router;
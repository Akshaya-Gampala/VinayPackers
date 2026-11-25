
const express = require("express");
const mongoose = require("mongoose");
const Review = require("../models/Review");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Customer submits a review
router.post("/", async (req, res) => {
  try {
    const { customerName, rating, comment } = req.body;

    if (
      !customerName?.trim() ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5 ||
      !comment?.trim()
    ) {
      return res.status(400).json({
        message: "Please provide a name, valid rating and review."
      });
    }

    const review = await Review.create({
      customerName: customerName.trim(),
      rating,
      comment: comment.trim()
    });

    res.status(201).json({
      message: "Thank you! Your review was submitted for approval."
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to submit review."
    });
  }
});

// Public: display approved reviews only
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true })
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch reviews."
    });
  }
});

// Admin: view all reviews, including pending
router.get("/admin/all", authMiddleware, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch reviews."
    });
  }
});

// Admin: approve or reject a review
router.patch("/:id/approval", authMiddleware, async (req, res) => {
  try {
    const { isApproved } = req.body;

    if (typeof isApproved !== "boolean") {
      return res.status(400).json({
        message: "isApproved must be true or false."
      });
    }

    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid review ID." });
    }

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({
        message: "Review not found."
      });
    }

    res.json({
      message: "Review approval updated successfully.",
      review
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to update review."
    });
  }
});

// Admin: delete a review
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid review ID." });
    }

    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found."
      });
    }

    res.json({ message: "Review deleted successfully." });
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete review."
    });
  }
});

module.exports = router;

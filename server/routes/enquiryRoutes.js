
const express = require("express");
const Enquiry = require("../models/Enquiry");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Customer submits an enquiry
router.post("/", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      pickupLocation,
      dropLocation,
      movingDate,
      message,
    } = req.body;

    if (!name || !phone || !pickupLocation || !dropLocation) {
      return res.status(400).json({
        message: "Please provide all required details.",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      phone,
      email,
      service,
      pickupLocation,
      dropLocation,
      movingDate: movingDate || undefined,
      message,
    });

    res.status(201).json({
      message: "Your enquiry has been submitted successfully!",
      enquiryId: enquiry._id,
    });
  } catch (error) {
    console.error("Enquiry error:", error.message);
    res.status(500).json({
      message: "Unable to submit enquiry.",
    });
  }
});

// Admin views all enquiries
router.get("/", authMiddleware, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch enquiries." });
  }
});

// Admin updates enquiry status
router.patch("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    if (!["New", "Contacted", "Completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found." });
    }

    res.json({
      message: "Enquiry status updated successfully.",
      enquiry,
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to update enquiry." });
  }
});

module.exports = router;

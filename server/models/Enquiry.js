
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    service: {
      type: String,
      trim: true,
    },

    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },

    dropLocation: {
      type: String,
      required: true,
      trim: true,
    },

    movingDate: {
      type: Date,
    },

    message: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Completed"],
      default: "New",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);

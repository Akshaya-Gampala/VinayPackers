
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  ...(process.env.FRONTEND_URL || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean),
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json());

// API routes
app.use("/api/admin", adminRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/reviews", reviewRoutes);

// API health check
app.get("/", (req, res) => {
  res.json({
    message: "Vinay Packers API is running!",
  });
});

// Start server
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully!");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();

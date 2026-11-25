
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

async function createAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password || password.length < 12) {
      throw new Error(
        "Provide an admin email and a password of at least 12 characters."
      );
    }

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from the .env file.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully!");

    const normalizedEmail = email.toLowerCase().trim();

    const existingAdmin = await Admin.findOne({
      email: normalizedEmail,
    });

    if (existingAdmin) {
      console.log("This admin account already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      email: normalizedEmail,
      password: hashedPassword,
    });

    console.log("Admin account created successfully!");
  } catch (error) {
    console.error("Admin creation failed:", error.message);
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  }
}

createAdmin();

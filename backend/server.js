import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config(); // Load environment variables from .env file

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", authRoutes); // Auth routes middleware

// Start server and connect to database
app.listen(PORT, () => {
  connectDB();
  console.log(`App is running on port ${PORT}`);
});

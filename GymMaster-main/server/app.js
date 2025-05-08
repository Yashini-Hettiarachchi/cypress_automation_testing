// downloaded package require
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();

// initialise downlaoded package
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

dotenv.config();
console.log('Environment variables loaded');

// Try to use port 5000 by default, but allow fallback to other ports if needed
const PORT = process.env.PORT || 5000;
// user defined package
import connectDB from "./utils/connectDB.js";
// import User from "./models/User.js";
import authRoute from "./routes/authRoute.js";
import planRoute from "./routes/planCategoryRoute.js";
import subscriptionRoute from "./routes/subscriptionRoute.js";
import ContactRoute from "./routes/contactRoute.js";
import feedBackRoute from "./routes/feedBackRoute.js";

app.get("/", (req, res) =>{
res.send("server is running successfully");
});

// API routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/plan", planRoute);
app.use("/api/v1/subscription", subscriptionRoute);
app.use("/api/v1/contact", ContactRoute);
app.use("/api/v1/feedback", feedBackRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});


const startServer = async () => {
    try {
        // Try to connect to MongoDB but continue even if it fails
        await connectDB();

        // Try to start the server on the specified port
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        // Handle server errors
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.error(`Port ${PORT} is already in use. Trying port ${PORT + 1}...`);
                // Try the next port
                const newServer = app.listen(PORT + 1, () => {
                    console.log(`Server is running on port ${PORT + 1}`);
                });

                newServer.on('error', (err) => {
                    console.error(`Failed to start server on port ${PORT + 1}:`, err.message);
                });
            } else {
                console.error("Server error:", err.message);
            }
        });
    } catch (err) {
        console.error("Error starting server:", err.message);
    }
}

startServer();









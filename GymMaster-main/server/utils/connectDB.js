import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const url = process.env.MONGODB_URI;
        console.log("Attempting to connect to MongoDB...");

        if (!url) {
            console.error("MONGODB_URI is not defined in environment variables");
            return false;
        }

        console.log(`Using MongoDB URI: ${url}`);

        // Set connection options
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // 5 seconds timeout
        };

        await mongoose.connect(url, options);
        console.log("Connected to MongoDB successfully");
        return true;
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        console.error("Full error:", err);

        // Continue without MongoDB
        console.log("Continuing without MongoDB connection...");
        return false;
    }
}

export default connectDB;
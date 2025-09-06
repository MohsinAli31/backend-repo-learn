// server.js
import express from 'express';
const app = express();
import bodyParser from "body-parser";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from './config/dbconnect.js';
// import bcrypt from "bcrypt";
import authRouter from "./routes/authRoute.js"
dotenv.config(); // Load environment variables from .env

const PORT = process.env.PORT

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/user", authRouter);

// Example route: user registration with password hashing

// Connect to MongoDB and start server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

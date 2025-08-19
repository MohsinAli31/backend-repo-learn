import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Connect to local MongoDB Compass - digitic database
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📊 Database: ${conn.connection.name}`);
        console.log(`📁 Collections: ${Object.keys(conn.connection.collections).join(', ')}`);
        
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;

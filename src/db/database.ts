import mongoose from "mongoose";

export const connectDb: () => Promise<void> = async() => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`✅ Connected to MongoDB`);
        console.log(`📍 Host: ${connectionInstance.connection.host}`);
    } catch (error : any) {
        console.log("❌ Error connecting to MongoDB:", error.message);
        process.exit(1)
    }
}

 
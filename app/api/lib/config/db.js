import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://bhvnbhsl:todo@cluster0.mhjdoza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

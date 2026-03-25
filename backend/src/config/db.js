import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGOO DB CONNECTED !!");
  } catch (error) {
    console.log("Error Connecting to MonggoDB", error);
    process.exit(1);
  }
};

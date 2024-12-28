import mongoose from 'mongoose';

export const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  //process code 1 means exit with failure, 0 means exit with success
  }
}
// This file is a configuration file that connects to the MongoDB database. It is imported in server.js to connect to the database when the server starts.
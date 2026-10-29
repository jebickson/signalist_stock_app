
import mongoose from "mongoose";
import { setServers } from "node:dns";

// Use Google's DNS for MongoDB SRV lookups.
setServers(["8.8.8.8", "8.8.4.4"]);

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = (global.mongooseCache ??= {
  conn: null,
  promise: null,
});

export const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be set within .env");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};

// app.js or server.js
import dotenv  from "dotenv";
import mongoose from 'mongoose';
import express from 'express';
import visitRoute from '../routes/visit.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

console.log(process.env);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", visitRoute);

app.listen(3001, () => {
console.log("Server running on port 3001");
});
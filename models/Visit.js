// models/Visit.js
import mongoose, { mongo } from "mongoose";

const visitSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  visitTime: { type: Date, default: Date.now },
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit

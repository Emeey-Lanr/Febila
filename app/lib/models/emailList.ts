import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
 
});

export const emailModel = mongoose.models.email || mongoose.model("emails", emailSchema);

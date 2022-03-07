import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: mongoose.Schema.ObjectId, ref: "roles" },
  dbStatus: Boolean,
  registerDate: { type: Date, default: Date.now },
});

const user = mongoose.model("users", Schema);
export default user;

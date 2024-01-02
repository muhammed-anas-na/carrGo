import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userModel = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    password: String,
    isBlocked: Boolean,
    isPremium: Boolean,
    current_location: String,
    address: Array
})

userModel.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password || '', 10) || '';
  });

const user = mongoose.model('users' , userModel);
export {user}
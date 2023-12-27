import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    alt_number: String,
    password: String,
    isBlocked: Boolean,
    isPremium: Boolean,
    current_location: String,
    address: Array
})

const user = mongoose.model('users' , userModel);
export {user}
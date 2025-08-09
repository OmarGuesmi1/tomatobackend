import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://omar:24005223@cluster0.a6fpgjn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
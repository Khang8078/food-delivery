import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://khanghuynh8078:Khang1998@cluster0.gzh7iso.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}
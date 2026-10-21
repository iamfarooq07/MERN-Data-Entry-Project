import mongoose from "mongoose";

export const dataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
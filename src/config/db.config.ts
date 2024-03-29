import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const connectDB = () => {
	mongoose
		.connect(uri)
		.then(() => console.log("DB connected"))
		.catch((err) => console.log(err));
};

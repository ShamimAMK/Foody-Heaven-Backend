import { Request, Response } from "express";
import Restaurant from "../models/restaurant.model";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

export const createMyRestaurant = async (req: Request, res: Response) => {
	try {
		const existingRestaurant = await Restaurant.findOne({ user: req.userId });

		if (existingRestaurant) {
			return res
				.status(409)
				.json({ message: "User restaurant already exists" });
		}

		const image = req.file as Express.Multer.File;
		const base64Image = Buffer.from(image.buffer).toString("base64");
		const dataURI = `data:${image.mimetype};base64, ${base64Image}`;

		const uploadRespose = await cloudinary.v2.uploader.upload(dataURI);

		const restaurant = new Restaurant(req.body);

		restaurant.imageUrl = uploadRespose.url;
		restaurant.user = new mongoose.Types.ObjectId(req.userId);

		await restaurant.save();

		res.status(201).send(restaurant);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Something went wrong" });
	}
};

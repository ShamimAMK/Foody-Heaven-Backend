import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
		price: { type: Number, require: true },
	},
	{ timestamps: true }
);

const restaurantSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		restaurantName: { type: String, require: true },
		country: { type: String, require: true },
		city: { type: String, require: true },
		deliveryPrice: { type: Number, require: true },
		estimatedDeliveryTime: { type: Number, require: true },
		cuisines: { type: String, require: true },
		menuItem: [menuItemSchema],
		imageUrl: { type: String, require: true },
	},
	{
		timestamps: true,
	}
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;

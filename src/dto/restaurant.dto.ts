import { body } from "express-validator";
import { handleValidationError } from "../middlewares/validation.middleware";

export const validateMyRestaurantRequest = [
	body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
	body("country").notEmpty().withMessage("Country name is required"),
	body("city").notEmpty().withMessage("City name is required"),
	body("deliveryPrice")
		.isFloat({ min: 0 })
		.withMessage("DeliveryPrice must be positive number"),
	body("estimatedDeliveryTime")
		.isInt({ min: 0 })
		.withMessage("Estimated Delivery time must be an integer"),
	body("cuisines")
		.isArray()
		.withMessage("Cuisines must an array")
		.notEmpty()
		.withMessage("Cuisines array cannot be empty"),
	body("menuItems")
		.isArray()
		.withMessage("Menu Item must an array")
		.notEmpty()
		.withMessage("Menu Item array cannot be empty"),
	body("menuItems.*.name").notEmpty().withMessage("Menu Item name is required"),
	body("menuItems.*.price")
		.isFloat({ min: 0 })
		.withMessage("Menu Item price must be positive umber"),
	handleValidationError,
];

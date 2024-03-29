import { body } from "express-validator";
import { handleValidationError } from "../middlewares/validation.middleware";

export const validatedMyUserRequest = [
	body("name").isString().notEmpty().withMessage("Name must be a string"),
	body("addressLine1")
		.isString()
		.notEmpty()
		.withMessage("AddressLine1 must be a string"),
	body("country").isString().notEmpty().withMessage("Country must be a string"),
	body("city").isString().notEmpty().withMessage("City must be a string"),
	handleValidationError,
];

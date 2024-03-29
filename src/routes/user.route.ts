import express, { Router } from "express";
import {
	createCurrentUser,
	getCurrentUser,
	updateCurrentUser,
} from "../controllers/user.controller";
import { validatedMyUserRequest } from "../dto/user.dto";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validatedMyUserRequest, updateCurrentUser);

export default router;

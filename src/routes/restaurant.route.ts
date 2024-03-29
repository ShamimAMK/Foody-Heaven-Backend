import express, { Router } from "express";
import { createMyRestaurant } from "../controllers/restaurant.controller";
import { UploadStream } from "cloudinary";
import { upload } from "../utils/multer.utils";

const router: Router = express.Router();

router.post("/", upload.single("imageFile") createMyRestaurant);

export default router;

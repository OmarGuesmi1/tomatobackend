import express from "express"
import { addFood,listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer" // middleware to manage the upload of files (here images).

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage })
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list",listFood)
foodRouter.delete("/remove",removeFood)

export default foodRouter;
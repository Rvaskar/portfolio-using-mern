import express from "express";
// import { signup, login } from "../controllers/auth.js";
import { getAllCourse, addCourse, deleteCourse, updateCourse } from "../controllers/course.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/addCourse", addCourse);

router.get("/getAllCourse", getAllCourse);
router.delete("/deleteCourse/:id", deleteCourse);
router.put("/updateCourse/:id", updateCourse);

export default router;

import express from "express";
// import { signup, login } from "../controllers/auth.js";
import { getAllProjects, updateProject, addProject, deleteProject } from "../controllers/project.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/addProject", addProject);
// router.post("/login", login);

router.get("/getAllProject", getAllProjects);
router.delete("/deleteProject/:id", deleteProject);
router.patch("/update/:id",  updateProject);

export default router;

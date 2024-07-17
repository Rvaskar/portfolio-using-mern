import express from "express";
// import { signup, login } from "../controllers/auth.js";
import { getAllCertificates, addCertificate, deleteCertificate } from "../controllers/certificate.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/addCertificate", addCertificate);

router.get("/getAllCertificate", getAllCertificates);
router.delete("/deleteCertificate/:id", deleteCertificate);


export default router;

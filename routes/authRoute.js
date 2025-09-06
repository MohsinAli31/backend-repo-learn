import express from "express";
import { creatUser } from "../controller/userCtrl.js";

const router = express.Router();

router.post("/register", creatUser);

export default router;
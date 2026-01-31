
import {Signup,Login} from "../controller/AuthController.js"
import { Router } from "express";
const router = Router();
import userVerification from "../middleware/AuthMiddleware.js";

router.post('/api',userVerification)

router.post("/api/signup", Signup);
router.post('/api/login', Login)

export default router;
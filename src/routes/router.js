import { Router } from 'express';
import authRoutes from "./auth.routes.js";
import usersRoutes from "./user.routes.js";

const router = Router();

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)


export default router;
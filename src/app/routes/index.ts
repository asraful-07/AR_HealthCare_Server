import Router from "express";
import authRoutes from "../modules/auth/auth.routes";
import specialtyRoutes from "../modules/specialty/specialty.routes";
import doctorRoutes from "../modules/user/user.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/specialty", specialtyRoutes);
router.use("/users", doctorRoutes);

export const indexRouter = router;

import { Router } from "express";
import { CreateDoctorController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";

const doctorRoutes = Router();

doctorRoutes.post(
  "/create-doctor",
  validateRequest(createDoctorZodSchema),
  CreateDoctorController,
);

export default doctorRoutes;

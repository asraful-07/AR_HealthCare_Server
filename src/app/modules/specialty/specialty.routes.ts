import { Router } from "express";
import {
  CreateSpecialtyController,
  DeleteSpecialtyController,
  GetSpecialtyController,
  GetsSpecialtyController,
  UpdateSpecialtyController,
} from "./specialty.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { CreateSpecialtyZodSchema } from "./user.validation";

const specialtyRoutes = Router();

specialtyRoutes.post(
  "/",
  validateRequest(CreateSpecialtyZodSchema),
  CreateSpecialtyController,
);
specialtyRoutes.get("/", GetsSpecialtyController);
specialtyRoutes.get("/:id", GetSpecialtyController);
specialtyRoutes.patch("/:id", UpdateSpecialtyController);
specialtyRoutes.delete("/:id", DeleteSpecialtyController);

export default specialtyRoutes;

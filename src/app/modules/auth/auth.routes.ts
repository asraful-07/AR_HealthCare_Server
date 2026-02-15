import Router from "express";
import {
  LoginPatientController,
  RegisterPatientController,
} from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/register", RegisterPatientController);
authRoutes.post("/login", LoginPatientController);

export default authRoutes;

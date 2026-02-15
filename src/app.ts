import express, { type Application } from "express";
import { indexRouter } from "./app/routes";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

//* Routes
app.use("/api/v1", indexRouter);
app.get("/", (req, res) => {
  res.send("Welcome to AR HealthCare Backend API");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express, { type Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.send("Welcome to AR HealthCare Backend API");
});

export default app;

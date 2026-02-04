/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { Server } from "http";
import app from "./app.js";

function bootstrap() {
  let server: Server | null = null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    server = app.listen(5001, () => {
      console.log("Server is running on http://localhost:5001");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

// bootstrap();
bootstrap();

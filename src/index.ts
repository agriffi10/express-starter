import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server" });
});

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;

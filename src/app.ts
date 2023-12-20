import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server" });
});

export { app };

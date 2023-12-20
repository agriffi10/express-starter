import dotenv from "dotenv";
import { app } from "./app";
dotenv.config();

const port = process.env.PORT || 5001;

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;

import { describe } from "node:test";

import app from "./index";
import request from "supertest";

describe("Test index.ts", () => {
  it("should render the default message", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Express + TypeScript Server" });
  });
});

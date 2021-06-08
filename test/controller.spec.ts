import { request } from "express";
import faker from "faker";
import app from "../src/app";

describe("Users Ressources", () => {
  test("Get status 200 and array of users", async () => {
    const res = await request(app);
  });
});

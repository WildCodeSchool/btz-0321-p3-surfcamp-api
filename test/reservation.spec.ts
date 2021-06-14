import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Reservation Ressources", () => {
  test("Get status 200 and an arraay of reservation", async () => {
    const res = await request(app)
      .get("/reservations")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });
});

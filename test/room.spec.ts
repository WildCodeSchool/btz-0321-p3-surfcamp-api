import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Rooms Ressources", () => {
  test("Get status 200 and array of rooms", async () => {
    const res = await request(app)
      .get("/rooms")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one room", async () => {
    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(10),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: faker.datatype.uuid(),
    };

    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
    };

    const { id } = await prisma.room.create({
      data: { ...sampleRoom, property: { create: { ...propertyId } } },
    });

    const res = await request(app)
      .get(`/rooms/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleRoom.name);
    expect(res.body).toHaveProperty("capacity", sampleRoom.capacity);
    expect(res.body).not.toHaveProperty("password");
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

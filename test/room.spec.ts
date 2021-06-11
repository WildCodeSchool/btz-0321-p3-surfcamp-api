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

  test("Get status 200 and one room", async () => {
    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
    };

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
    };

    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
      phoneNumber: "0678987809",
    };

    const { id } = await prisma.room.create({
      data: {
        ...sampleRoom,
        property: {
          create: { ...sampleProperty, address: { create: { ...address } } },
        },
      },
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

import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";

//    For this test we must create multiple ressources beacause
//  the ressource we are testing depend of others ressources
//  who depends of others too ...

describe("Rooms Ressources", () => {
  test("Get status 200 and array of rooms", async () => {
    const res = await request(app)
      .get("/rooms")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one room", async () => {
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: address,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: "0678987809",
      addressId: addressId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id } = await prisma.room.create({
      data: sampleRoom,
    });

    const res = await request(app)
      .get(`/rooms/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleRoom.name);
    expect(res.body).toHaveProperty("capacity", sampleRoom.capacity);
  });

  test("Post a room", async () => {
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: address,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: "0678987809",
      addressId: addressId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const res = await request(app)
      .post("/rooms")
      .expect(201)
      .send(sampleRoom)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleRoom.name);
    expect(res.body).toHaveProperty("capacity", sampleRoom.capacity);
    expect(res.body).toHaveProperty("propertyId", sampleRoom.propertyId);
  });

  test("Put one room", async () => {
    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: address,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: "0678987809",
      addressId: addressId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id } = await prisma.room.create({
      data: sampleRoom,
    });

    await request(app).put(`/rooms/${id}`).send(sampleRoom).expect(204);

    expect.not.objectContaining(sampleRoom);
  });

  test("Delete one room", async () => {
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
      phoneNumber: "0678987809",
    };

    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id } = await prisma.room.create({
      data: {
        ...sampleRoom,
        property: {
          create: { ...sampleProperty, address: { create: { ...address } } },
        },
      },
    });

    await request(app).delete(`/rooms/${id}`).expect(204);

    expect.not.objectContaining(sampleRoom);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

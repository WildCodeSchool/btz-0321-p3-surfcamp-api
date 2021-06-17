import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Address Ressources", () => {
  test("Get status 200 and an array of address", async () => {
    const res = await request(app)
      .get("/addresses")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one address", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };

    const { id } = await prisma.address.create({
      data: sampleAddress,
    });

    const res = await request(app)
      .get(`/addresses/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("city", sampleAddress.city);
    expect(res.body).toHaveProperty("lat", sampleAddress.lat);
    expect(res.body).toHaveProperty("long", sampleAddress.long);
  });

  test("Post an address", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };

    const res = await request(app)
      .post("/addresses")
      .send(sampleAddress)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("city", sampleAddress.city);
    expect(res.body).toHaveProperty("lat", sampleAddress.lat);
    expect(res.body).toHaveProperty("long", sampleAddress.long);
  });

  test("Put one address", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };

    const { id } = await prisma.address.create({
      data: sampleAddress,
    });

    await request(app).put(`/addresses/${id}`).send(sampleAddress).expect(204);

    expect.not.objectContaining(sampleAddress);
  });

  test("Delete one address", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };

    const { id } = await prisma.address.create({
      data: sampleAddress,
    });

    await request(app).delete(`/addresses/${id}`).expect(204);

    expect.not.objectContaining(sampleAddress);
  });
});

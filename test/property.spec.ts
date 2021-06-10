import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Properties Resources", () => {
  test("Get status 200 and array of properties", async () => {
    const res = await request(app)
      .get("/properties")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("Get status 200 and one property", async () => {
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

    const { id } = await prisma.property.create({
      data: {
        ...sampleProperty,
        address: { create: { ...address } },
      },
    });

    const res = await request(app)
      .get(`/properties/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleProperty.name);
    expect(res.body).toHaveProperty("description", sampleProperty.description);
    expect(res.body).toHaveProperty("type", sampleProperty.type);
  });

  test("post succeeded, property online", async () => {
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

    const { id } = await prisma.address.create({
      data: { ...address },
    });
    const sampleProperty = {
      addressId: id,
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
    };

    const res = await request(app)
      .post("/properties/")
      .send(sampleProperty)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleProperty.name);
    expect(res.body).toHaveProperty("description", sampleProperty.description);
    expect(res.body).toHaveProperty("type", sampleProperty.type);
  });
});

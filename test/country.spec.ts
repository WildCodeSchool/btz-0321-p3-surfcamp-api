import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Country Ressources", () => {
  test("Get status 200 and array of countries", async () => {
    const res = await request(app)
      .get("/countries")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one country", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.country.create({
      data: sampleCountry,
    });

    const res = await request(app)
      .get(`/countries/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCountry.name);
    expect(res.body).toHaveProperty("textSeo", sampleCountry.textSeo);
    expect(res.body).toHaveProperty("countryCode", sampleCountry.countryCode);
  });

  test("Post a country and have status 201", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const res = await request(app)
      .post("/countries")
      .send(sampleCountry)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCountry.name);
    expect(res.body).toHaveProperty("textSeo", sampleCountry.textSeo);
    expect(res.body).toHaveProperty("countryCode", sampleCountry.countryCode);
  });

  test("Put one country and expect a status 204", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.country.create({
      data: sampleCountry,
    });

    await request(app).put(`/countries/${id}`).send(sampleCountry).expect(204);

    expect.not.objectContaining(sampleCountry);
  });

  test("Delete one country and expect a status 204", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.country.create({
      data: sampleCountry,
    });

    await request(app).delete(`/countries/${id}`).expect(204);

    expect.not.objectContaining(sampleCountry);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("City Ressources", () => {
  test("Get status 200 and array of cities", async () => {
    const res = await request(app)
      .get("/cities")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one city", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.city.create({
      data: sampleCity,
    });

    const res = await request(app)
      .get(`/cities/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCity.name);
    expect(res.body).toHaveProperty("textSeo", sampleCity.textSeo);
    expect(res.body).toHaveProperty("countryCode", sampleCity.countryCode);
  });

  test("Post a city and have status 201", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const res = await request(app)
      .post("/cities")
      .send(sampleCity)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCity.name);
    expect(res.body).toHaveProperty("textSeo", sampleCity.textSeo);
    expect(res.body).toHaveProperty("countryCode", sampleCity.countryCode);
  });

  test("Put one city and expect a status 204", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.city.create({
      data: sampleCity,
    });

    await request(app).put(`/cities/${id}`).send(sampleCity).expect(204);

    expect.not.objectContaining(sampleCity);
  });

  test("Delete one city and expect a status 204", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id } = await prisma.city.create({
      data: sampleCity,
    });

    await request(app).delete(`/cities/${id}`).expect(204);

    expect.not.objectContaining(sampleCity);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

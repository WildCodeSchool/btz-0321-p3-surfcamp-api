import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Country Picture Ressources", () => {
  test("Get status 200 and an array of countryPictures", async () => {
    const res = await request(app)
      .get("/countrypictures")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one countryPicture", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: countryId } = await prisma.country.create({
      data: sampleCountry,
    });

    const sampleCountryPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      countryId: countryId,
    };

    const { id } = await prisma.countryPicture.create({
      data: sampleCountryPicture,
    });

    const res = await request(app)
      .get(`/countrypictures/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCountryPicture.name);
    expect(res.body).toHaveProperty("url", sampleCountryPicture.url);
    expect(res.body).toHaveProperty(
      "countryId",
      sampleCountryPicture.countryId
    );
  });

  test("Post a countryPicture and expect a status 201", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: countryId } = await prisma.country.create({
      data: sampleCountry,
    });

    const sampleCountryPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      countryId: countryId,
    };

    const res = await request(app)
      .post("/countrypictures")
      .send(sampleCountryPicture)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCountryPicture.name);
    expect(res.body).toHaveProperty("url", sampleCountryPicture.url);
    expect(res.body).toHaveProperty(
      "countryId",
      sampleCountryPicture.countryId
    );
  });

  test("Put one countryPicture and expect a status 204", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: countryId } = await prisma.country.create({
      data: sampleCountry,
    });

    const sampleCountryPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      countryId: countryId,
    };

    const { id } = await prisma.countryPicture.create({
      data: sampleCountryPicture,
    });

    await request(app)
      .put(`/countrypictures/${id}`)
      .send(sampleCountryPicture)
      .expect(204);

    expect.not.objectContaining(sampleCountryPicture);
  });

  test("Delete one countryPicture and expect a status 204", async () => {
    const sampleCountry = {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: countryId } = await prisma.country.create({
      data: sampleCountry,
    });

    const sampleCountryPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      countryId: countryId,
    };

    const { id } = await prisma.countryPicture.create({
      data: sampleCountryPicture,
    });

    await request(app).delete(`/countrypictures/${id}`).expect(204);

    expect.not.objectContaining(sampleCountryPicture);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

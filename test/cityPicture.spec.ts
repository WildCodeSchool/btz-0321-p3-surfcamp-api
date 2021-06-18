import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("City Picture Ressources", () => {
  test("Get status 200 and array of cityPictures", async () => {
    const res = await request(app)
      .get("/citypictures")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one cityPicture", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: cityId } = await prisma.city.create({
      data: sampleCity,
    });

    const sampleCityPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      cityId: cityId,
    };

    const { id } = await prisma.cityPicture.create({
      data: sampleCityPicture,
    });

    const res = await request(app)
      .get(`/citypictures/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCityPicture.name);
    expect(res.body).toHaveProperty("url", sampleCityPicture.url);
    expect(res.body).toHaveProperty("cityId", sampleCityPicture.cityId);
  });

  test("Post a cityPicture and have status 201", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: cityId } = await prisma.city.create({
      data: sampleCity,
    });

    const sampleCityPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      cityId: cityId,
    };

    const res = await request(app)
      .post("/citypictures")
      .send(sampleCityPicture)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", sampleCityPicture.name);
    expect(res.body).toHaveProperty("url", sampleCityPicture.url);
    expect(res.body).toHaveProperty("cityId", sampleCityPicture.cityId);
  });

  test("Put one cityPicture and expect a status 204", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: cityId } = await prisma.city.create({
      data: sampleCity,
    });

    const sampleCityPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      cityId: cityId,
    };

    const { id } = await prisma.cityPicture.create({
      data: sampleCityPicture,
    });

    await request(app)
      .put(`/citypictures/${id}`)
      .send(sampleCityPicture)
      .expect(204);

    expect.not.objectContaining(sampleCityPicture);
  });

  test("Delete one cityPicture and expect a status 204", async () => {
    const sampleCity = {
      name: faker.address.city(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    };

    const { id: cityId } = await prisma.city.create({
      data: sampleCity,
    });

    const sampleCityPicture = {
      name: faker.lorem.word(),
      url: faker.internet.avatar(),
      cityId: cityId,
    };

    const { id } = await prisma.cityPicture.create({
      data: sampleCityPicture,
    });

    await request(app).delete(`/citypictures/${id}`).expect(204);

    expect.not.objectContaining(sampleCityPicture);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

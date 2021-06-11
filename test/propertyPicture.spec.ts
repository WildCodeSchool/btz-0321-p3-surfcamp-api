import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("PropertyPicture Ressources", () => {
  test("Get status 200 and array of PropertyPicture", async () => {
    const res = await request(app)
      .get("/Propertypicture")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one propertypicture", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id } = await prisma.user.create({
      data: sampleUser,
    });

    const res = await request(app)
      .get(`/users/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("email", sampleUser.email);
    expect(res.body).toHaveProperty("lastname", sampleUser.lastname);
    expect(res.body).not.toHaveProperty("password");
  });

  test("post user should fail, password doesn't match", async () => {
    const sampleUser = {
      email: "Brielle_Green44@gmail.com",
      firstname: "Mittie",
      lastname: "Hodkiewicz",
      birthDate: "2020-10-01T12:18:10.404Z",
      picture: "https://cdn.fakercloud.com/vatars/danmartin70_128.jpg",
      password: "OvjXgSmZzmbL6bL",
      confirmPassword: "o1wIL8kEIz_i0mx",
      phoneNumber: "(608) 354-7463",
    };

    const res = await request(app).post(`/PropertyPicture`).send(sampleUser).expect(422);
    // .expect("Content-Type", /json/);
    //  TODO : change this when JOI validation is ready
  });

  test("post user", async () => {
    const password = faker.internet.password();

    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: password,
      confirmPassword: password,
      phoneNumber: faker.phone.phoneNumber(),
    };

    const res = await request(app)
      .post(`/PropertyPicture`)
      .send(sampleUser)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("email", sampleUser.email);
    expect(res.body).toHaveProperty("lastname", sampleUser.lastname);
    expect(res.body).not.toHaveProperty("password");
  });

  test("put one user", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id } = await prisma.user.create({
      data: sampleUser,
    });

    const res = await request(app)
      .put(`/PropertyPicture/${id}`)
      .send(sampleUser)
      .expect(204);

    expect.not.objectContaining(sampleUser);
  });

  test("delete one user", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id } = await prisma.user.create({
      data: sampleUser,
    });
    const res = await request(app).delete(`/PropertyPicture/${id}`).expect(204);

    expect.not.objectContaining(sampleUser);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

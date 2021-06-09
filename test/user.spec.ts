import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Users Resources", () => {
  test("Get status 200 and array of users", async () => {
    const res = await request(app)
      .get("/users")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one user", async () => {
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

  test("post user should fail, passwords don't match", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const res = await request(app)
      .post(`/users`)
      .send(sampleUser)
      .expect(422)
      .expect("Content-Type", /json/);
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
      .post(`/users`)
      .send(sampleUser)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("email", sampleUser.email);
    expect(res.body).toHaveProperty("lastname", sampleUser.lastname);
    expect(res.body).not.toHaveProperty("password");
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

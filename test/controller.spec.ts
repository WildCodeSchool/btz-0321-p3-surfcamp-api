import request from "supertest";
import faker from "faker";
import app from "../src/app";

describe("Users Ressources", () => {
  const usersProperties = [
    "id",
    "firstname",
    "lastname",
    "email",
    "password",
    "image",
    "role",
    "birthDate",
    "status",
    "mobilePhone",
  ];
  test("Get status 200 and array of users", async () => {
    const res = await request(app)
      .get("/users")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((user: any) => {
      expect(user).toHaveProperty(usersProperties[0]);
      expect(user).toHaveProperty(usersProperties[1]);
      expect(user).toHaveProperty(usersProperties[2]);
      expect(user).toHaveProperty(usersProperties[3]);
      expect(user).toHaveProperty(usersProperties[4]);
      expect(user).toHaveProperty(usersProperties[5]);
      expect(user).toHaveProperty(usersProperties[6]);
      expect(user).toHaveProperty(usersProperties[7]);
      expect(user).toHaveProperty(usersProperties[8]);
      expect(user).toHaveProperty(usersProperties[9]);
    });
  });

  test("Get status 200 and array of one user", async () => {
    const res = await request(app)
      .get("/users/:id")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty(usersProperties[0]);
    expect(res.body).toHaveProperty(usersProperties[1]);
    expect(res.body).toHaveProperty(usersProperties[2]);
    expect(res.body).toHaveProperty(usersProperties[3]);
    expect(res.body).toHaveProperty(usersProperties[4]);
    expect(res.body).toHaveProperty(usersProperties[5]);
    expect(res.body).toHaveProperty(usersProperties[6]);
    expect(res.body).toHaveProperty(usersProperties[7]);
    expect(res.body).toHaveProperty(usersProperties[8]);
    expect(res.body).toHaveProperty(usersProperties[9]);
  });
});

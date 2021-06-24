import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";
import { PropertyType } from "@prisma/client";

//    For this test we must create multiple ressources beacause
//  the ressource we are testing depend of others ressources
//  who depends of others too ...

describe("Features Ressources", () => {
  test("Get status 200 and an array of features", async () => {
    const res = await request(app)
      .get("/features")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one feature", async () => {
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

    const user = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: user,
    });

    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: PropertyType.SURFCAMP,
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: property,
    });

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
      iconUrl: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.feature.create({
      data: sampleFeature,
    });

    const res = await request(app)
      .get(`/features/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("label", sampleFeature.label);
    expect(res.body).toHaveProperty("type", sampleFeature.type);
  });

  test("Post feature", async () => {
    const user = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: user,
    });

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

    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: PropertyType.SURFCAMP,
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: property,
    });

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
      propertyId: propertyId,
      iconUrl: faker.internet.url(),
    };

    const res = await request(app)
      .post("/features")
      .expect(201)
      .send(sampleFeature)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("label", sampleFeature.label);
    expect(res.body).toHaveProperty("type", sampleFeature.type);
    expect(res.body).toHaveProperty("propertyId", sampleFeature.propertyId);
  });

  test("Put one feature", async () => {
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

    const user = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: user,
    });

    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: PropertyType.SURFCAMP,
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: property,
    });

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
      iconUrl: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.feature.create({
      data: sampleFeature,
    });

    await request(app).put(`/features/${id}`).send(sampleFeature).expect(204);

    expect.not.objectContaining(sampleFeature);
  });

  test("Delete one feature", async () => {
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

    const user = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: user,
    });

    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: PropertyType.SURFCAMP,
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: property,
    });

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
      iconUrl: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.feature.create({
      data: sampleFeature,
    });

    await request(app).delete(`/features/${id}`).expect(204);

    expect.not.objectContaining(sampleFeature);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

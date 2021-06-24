import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";
import { PropertyType } from "@prisma/client";

//    For this test we must create multiple ressources beacause
//  the ressource we are testing depend of others ressources
//  who depends of others too ...

describe("PropertyPicture Ressources", () => {
  test("Get status 200 and array of PropertyPicture", async () => {
    const res = await request(app)
      .get("/propertypictures")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one propertypicture", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: sampleUser,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const samplePropertyPicture = {
      name: faker.lorem.word(),
      description: faker.lorem.text(),
      url: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.propertyPicture.create({
      data: samplePropertyPicture,
    });

    const res = await request(app)
      .get(`/propertypictures/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", samplePropertyPicture.name);
    expect(res.body).toHaveProperty(
      "description",
      samplePropertyPicture.description
    );
    expect(res.body).toHaveProperty("url", samplePropertyPicture.url);
    expect(res.body).toHaveProperty(
      "propertyId",
      samplePropertyPicture.propertyId
    );
  });

  test("post property picture", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: sampleUser,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const samplePropertyPicture = {
      name: faker.lorem.word(),
      description: faker.lorem.text(),
      url: faker.internet.url(),
      propertyId: propertyId,
    };

    const res = await request(app)
      .post(`/propertypictures`)
      .send(samplePropertyPicture)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("name", samplePropertyPicture.name);
    expect(res.body).toHaveProperty(
      "description",
      samplePropertyPicture.description
    );
    expect(res.body).toHaveProperty(
      "propertyId",
      samplePropertyPicture.propertyId
    );
  });

  test("put one property picture", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: sampleUser,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const samplePropertyPicture = {
      name: faker.lorem.word(),
      description: faker.lorem.text(),
      url: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.propertyPicture.create({
      data: samplePropertyPicture,
    });

    await request(app)
      .put(`/propertypictures/${id}`)
      .send(samplePropertyPicture)
      .expect(204);

    expect.not.objectContaining(samplePropertyPicture);
  });

  test("delete one user", async () => {
    const sampleAddress = {
      city: faker.address.city(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: sampleUser,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const samplePropertyPicture = {
      name: faker.lorem.word(),
      description: faker.lorem.text(),
      url: faker.internet.url(),
      propertyId: propertyId,
    };

    const { id } = await prisma.propertyPicture.create({
      data: samplePropertyPicture,
    });

    await request(app).delete(`/propertypictures/${id}`).expect(204);

    expect.not.objectContaining(samplePropertyPicture);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

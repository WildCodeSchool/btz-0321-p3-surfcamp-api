import request from "supertest";
import faker from "faker";

import prisma from "../prisma/prismaClient";
import app from "../src/app";

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
    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
    };

    const { id } = await prisma.feature.create({
      data: {
        ...sampleFeature,
        property: {
          create: { ...property, address: { create: { ...address } } },
        },
      },
    });

    const res = await request(app)
      .get(`/features/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("label", sampleFeature.label);
    expect(res.body).toHaveProperty("type", sampleFeature.type);
  });

  test("Post feature", async () => {
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
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: property,
    });

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
      propertyId: propertyId,
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
    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
    };

    const { id } = await prisma.feature.create({
      data: {
        ...sampleFeature,
        property: {
          create: { ...property, address: { create: { ...address } } },
        },
      },
    });

    const res = await request(app)
      .put(`/features/${id}`)
      .send(sampleFeature)
      .expect(204);

    expect.not.objectContaining(sampleFeature);
  });

  test("Delete one feature", async () => {
    const property = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const sampleFeature = {
      label: faker.lorem.word(),
      type: faker.lorem.word(),
    };

    const { id } = await prisma.feature.create({
      data: {
        ...sampleFeature,
        property: {
          create: { ...property, address: { create: { ...address } } },
        },
      },
    });

    const res = await request(app).delete(`/features/${id}`).expect(204);

    expect.not.objectContaining(sampleFeature);
  });
});

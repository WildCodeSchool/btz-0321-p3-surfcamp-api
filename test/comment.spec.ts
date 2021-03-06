import request from "supertest";
import faker from "faker";
import { Status } from ".prisma/client";
import prisma from "../prisma/prismaClient";
import app from "../src/app";
import { PropertyType } from "@prisma/client";

//    For this test we must create multiple ressources beacause
//  the ressource we are testing depend of others ressources
//  who depends of others too ...

describe("comments Ressources", () => {
  test("Get status 200 and array of comments", async () => {
    const res = await request(app)
      .get("/comments")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one Comment", async () => {
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

    const sampleReservarion = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      status: Status.CANCELED,
      userId: userId,
    };

    const { id: reservationId } = await prisma.reservation.create({
      data: sampleReservarion,
    });

    const sampleComment = {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
      reservationId: reservationId,
      userId: userId,
    };

    const { id } = await prisma.comment.create({
      data: sampleComment,
    });

    const res = await request(app)
      .get(`/comments/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("comment", sampleComment.comment);
    expect(res.body).toHaveProperty("rate", sampleComment.rate);
    expect(res.body).toHaveProperty(
      "reservationId",
      sampleComment.reservationId
    );
    expect(res.body).toHaveProperty("userId", sampleComment.userId);
  });

  test("post Comment", async () => {
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

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      addressId: addressId,
      phoneNumber: faker.phone.phoneNumber(),
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleReservarion = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      status: Status.CANCELED,
      userId: userId,
    };

    const { id: reservationId } = await prisma.reservation.create({
      data: sampleReservarion,
    });

    const sampleComment = {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
      reservationId: reservationId,
      userId: userId,
    };

    const res = await request(app)
      .post(`/comments`)
      .send(sampleComment)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty("comment", sampleComment.comment);
    expect(res.body).toHaveProperty("rate", sampleComment.rate);
    expect(res.body).toHaveProperty(
      "reservationId",
      sampleComment.reservationId
    );
    expect(res.body).toHaveProperty("userId", sampleComment.userId);
  });

  test("put one Comment", async () => {
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

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      addressId: addressId,
      phoneNumber: faker.phone.phoneNumber(),
      userId: userId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleReservarion = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      status: Status.CANCELED,
      userId: userId,
    };

    const { id: reservationId } = await prisma.reservation.create({
      data: sampleReservarion,
    });

    const sampleComment = {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
      reservationId: reservationId,
      userId: userId,
    };

    const { id } = await prisma.comment.create({
      data: sampleComment,
    });

    await request(app).put(`/comments/${id}`).send(sampleComment).expect(204);

    expect.not.objectContaining(sampleComment);
  });

  test("delete one Comment", async () => {
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

    const sampleProperty = {
      name: faker.company.companyName(),
      priceByNight: faker.datatype.number(),
      phoneNumber: faker.phone.phoneNumber(),
      description: faker.lorem.text(),
      type: PropertyType.SURFCAMP,
      userId: userId,
      addressId: addressId,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleReservarion = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      status: Status.CANCELED,
      userId: userId,
    };

    const { id: reservationId } = await prisma.reservation.create({
      data: sampleReservarion,
    });

    const sampleComment = {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
      reservationId: reservationId,
      userId: userId,
    };

    const { id } = await prisma.comment.create({
      data: sampleComment,
    });

    await request(app).delete(`/comments/${id}`).expect(204);

    expect.not.objectContaining(sampleComment);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

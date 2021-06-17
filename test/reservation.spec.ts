import request from "supertest";
import faker from "faker";
import prisma from "../prisma/prismaClient";
import app from "../src/app";

describe("Reservation Ressources", () => {
  test("Get status 200 and an arraay of reservation", async () => {
    const res = await request(app)
      .get("/reservations")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and one reservation", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({ data: sampleUser });

    const sampleAddress = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
    };
    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id: roomId } = await prisma.room.create({ data: sampleRoom });

    const sampleReservation = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      userId: userId,
      roomId: roomId,
    };
    const { id } = await prisma.reservation.create({ data: sampleReservation });
    const res = await request(app)
      .get(`/reservations/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty(
      "customerCount",
      sampleReservation.customerCount
    );
    expect(res.body).toHaveProperty(
      "endDate",
      sampleReservation.endDate.toISOString()
    );
  });

  test("Post one reservation", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({ data: sampleUser });

    const sampleAddress = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
    };
    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id: roomId } = await prisma.room.create({ data: sampleRoom });

    const sampleReservation = {
      customerCount: faker.datatype.number({ min: 1, max: 1999 }),
      endDate: faker.date.future(),
      startDate: faker.date.future(),
      userId: userId,
      roomId: roomId,
      propertyId: propertyId,
    };

    const res = await request(app)
      .post("/reservations/")
      .send(sampleReservation)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(res.body).toHaveProperty(
      "customerCount",
      sampleReservation.customerCount
    );
    expect(res.body).toHaveProperty(
      "endDate",
      sampleReservation.endDate.toISOString()
    );
  });

  test("Put one reservation", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({ data: sampleUser });

    const sampleAddress = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
    };
    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id: roomId } = await prisma.room.create({ data: sampleRoom });

    const sampleReservation = {
      customerCount: faker.datatype.number({ min: 1, max: 1999 }),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      userId: userId,
      roomId: roomId,
    };
    const { id } = await prisma.reservation.create({ data: sampleReservation });

    await request(app)
      .put(`/reservations/${id}`)
      .expect(204)
      .send(sampleReservation);

    expect.not.objectContaining(sampleReservation);
  });

  test("Delete one reservation", async () => {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({ data: sampleUser });

    const sampleAddress = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      streetNumber: "10",
      zipcode: "64600",
      lat: "43.481402",
      long: "-1.514699",
    };

    const { id: addressId } = await prisma.address.create({
      data: sampleAddress,
    });

    const sampleProperty = {
      name: faker.company.companyName(),
      description: faker.company.catchPhraseDescriptor(),
      type: faker.lorem.word(),
      priceByNight: faker.datatype.number({ min: 1, max: 10 }),
      status: faker.datatype.boolean(),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: addressId,
    };
    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.words(2),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      priceByNight: faker.datatype.number(),
      propertyId: propertyId,
    };

    const { id: roomId } = await prisma.room.create({ data: sampleRoom });

    const sampleReservation = {
      customerCount: faker.datatype.number({ min: 1, max: 1999 }),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      userId: userId,
      roomId: roomId,
    };
    const { id } = await prisma.reservation.create({ data: sampleReservation });

    await request(app).delete(`/reservations/${id}`).expect(204);

    expect.not.objectContaining(sampleReservation);
  });
});

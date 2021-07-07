import { PrismaClient, PropertyType } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

const seed = async () => {
  const users = new Array(20).fill("").map(() => {
    return {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      picture: faker.image.avatar(),
      birthDate: faker.date.past().toISOString(),
      phoneNumber: faker.phone.phoneNumber(),
    };
  });

  const addresses = new Array(50).fill("").map(() => {
    return {
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
  });

  const properties = new Array(30).fill("").map(() => {
    return {
      description: faker.company.catchPhraseDescriptor(),
      name: faker.company.companyName(),
      priceByNight: parseInt(faker.commerce.price()),
      phoneNumber: faker.phone.phoneNumber(),
    };
  });

  const rooms = new Array(250).fill("").map(() => {
    return {
      name: faker.company.companyName(),
      description: faker.lorem.text(),
      capacity: faker.datatype.number(),
      priceByNight: faker.datatype.number(),
    };
  });

  const reservations = new Array(500).fill("").map(() => {
    return {
      startDate: faker.date.future().toISOString(),
      endDate: faker.date.future().toISOString(),
      customerCount: faker.datatype.number(),
    };
  });

  const comments = new Array(500).fill("").map(() => {
    return {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
    };
  });

  // create users
  const createdUsers = await Promise.all(
    users.map((u, i) => {
      return prisma.user.create({
        data: {
          ...u,
          address: {
            create: {
              ...addresses[i + 30],
            },
          },
        },
      });
    })
  );

  // create properties and rooms
  await Promise.all(
    properties.map((p, i) => {
      const type = ["HOUSE", "SURFCAMP", "SURFSCHOOL"][
        Math.floor(Math.random() * 3)
      ] as PropertyType;
      return prisma.property.create({
        data: {
          ...p,
          type,
          address: {
            create: {
              ...addresses[i],
            },
          },
          User: {
            connect: {
              id: createdUsers[Math.floor(Math.random() * createdUsers.length)]
                .id,
            },
          },
          ...(type === "SURFCAMP" && {
            rooms: {
              createMany: {
                data: rooms.slice(i * 5, i * 5 + Math.floor(Math.random() * 8)),
              },
            },
          }),
        },
      });
    })
  );

  const createdRooms = await prisma.room.findMany();

  // create reservations
  await Promise.all(
    reservations.map((r, i) => {
      const selectRandomUserId =
        createdUsers[Math.floor(Math.random() * createdUsers.length)].id;

      const selectRandomRoomId =
        createdRooms[Math.floor(Math.random() * createdRooms.length)].id;

      return prisma.reservation.create({
        data: {
          ...r,
          user: {
            connect: {
              id: selectRandomUserId,
            },
          },
          room: {
            connect: {
              id: selectRandomRoomId,
            },
          },
          comment: {
            create: {
              ...comments[i],
              userId: selectRandomUserId,
              roomId: selectRandomRoomId,
            },
          },
        },
      });
    })
  );
};

seed()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e); //show back-end error
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

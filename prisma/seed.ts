/* eslint-disable no-console */
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
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    };
  });

  const cities = new Array(10).fill("").map(() => {
    return {
      name: faker.address.cityName(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
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

  const countries = [
    {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    },
    {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    },
    {
      name: faker.address.country(),
      title: faker.lorem.words(5),
      description: faker.lorem.sentence(),
      textSeo: faker.lorem.sentence(),
      countryCode: faker.address.countryCode(),
    },
  ];

  const comments = new Array(500).fill("").map(() => {
    return {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
    };
  });

  console.log("🌱 Generate 10 cities...");
  const createdCities = await Promise.all(
    cities.map((c) => {
      return prisma.city.create({
        data: c,
      });
    })
  );

  // create countries
  console.log("🌱 Generate 3 countries...");
  const createdCountries = await Promise.all(
    countries.map((c) => {
      return prisma.country.create({
        data: c,
      });
    })
  );

  console.log("🌱 Generate 50 addresses...");
  const createdAddresses = await Promise.all(
    addresses.map((c) => {
      return prisma.address.create({
        data: {
          ...c,
          country: {
            connect: {
              id: createdCountries[
                Math.floor(Math.random() * createdCountries.length)
              ].id,
            },
          },
          city: {
            connect: {
              id: createdCities[
                Math.floor(Math.random() * createdCities.length)
              ].id,
            },
          },
        },
      });
    })
  );

  // create users
  console.log("🌱 Generate 20 users...");
  const createdUsers = await Promise.all(
    users.map((u, i) => {
      return prisma.user.create({
        data: {
          ...u,

          address: {
            connect: {
              id: createdAddresses[i + 30].id,
            },
          },
        },
      });
    })
  );

  // create properties and comments
  console.log("🌱 Generate 30 properties...");
  await Promise.all(
    properties.map((p, i) => {
      const selectRandomUserId =
        createdUsers[Math.floor(Math.random() * createdUsers.length)].id;
      const type = ["HOUSE", "SURFCAMP", "SURFSCHOOL"][
        Math.floor(Math.random() * 3)
      ] as PropertyType;
      return prisma.property.create({
        data: {
          ...p,
          type,
          address: {
            connect: {
              id: createdAddresses[i].id,
            },
          },
          User: {
            connect: {
              id: createdUsers[Math.floor(Math.random() * createdUsers.length)]
                .id,
            },
          },
          comments: {
            create: {
              ...comments[i],
              userId: selectRandomUserId,
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
    console.log("✅ All done !");
  });

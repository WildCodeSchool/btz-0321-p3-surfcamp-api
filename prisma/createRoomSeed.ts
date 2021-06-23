import { PrismaClient } from "@prisma/client";
import faker from "faker";

const createComment = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const { id: addressId } = await prisma.address.create({
      data: {
        city: faker.address.cityName(),
        countryCode: faker.address.countryCode(),
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
        street: faker.address.streetName(),
        streetNumber: faker.address.streetAddress(),
        zipcode: faker.address.zipCode(),
      },
    });

    const { id } = await prisma.property.create({
      data: {
        description: faker.company.catchPhraseDescriptor(),
        name: faker.company.companyName(),
        priceByNight: parseInt(faker.commerce.price()),
        status: faker.datatype.boolean(),
        type: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
<<<<<<< HEAD
        addressId: address.id,
      },
    });

    const room: any = await prisma.property.create({
      data: {
        name: faker.name.firstName(),
        description: faker.lorem.words(20),
        priceByNight: faker.commerce.price(),
        capacity: faker.datatype.number({ min: 1, max: 6 }),
        propertyId: property.id,
      },
    });
  }
};

export default createRoom;
=======
        addressId: addressId,
      },
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.text(),
      capacity: faker.datatype.number(),
      priceByNight: faker.datatype.number(),
      propertyId: id,
    };

    await prisma.room.create({
      data: sampleRoom,
    });
  }
};
export default createComment;
>>>>>>> 7a13d668756f65440d913f22cc3786f667c69e41

import prisma from "../../../prisma/prismaClient";
import RoomHandlers from "./interfaces";

const post: RoomHandlers["post"] = async (req, res, next) => {
  const { name, description, capacity, priceByNight, propertyId } = req.body;

  try {
    const createdRoom = await prisma.room.create({
      data: {
        name,
        description,
        capacity,
        priceByNight,
        propertyId,
      },
    });

    res.status(201).json(createdRoom);
  } catch (error) {
    next(error);
  }
};

export default post;

import prisma from "../../../prisma/prismaClient";
import RoomHandlers from "./interfaces";

const getOne: RoomHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const room = await prisma.room.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(room);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

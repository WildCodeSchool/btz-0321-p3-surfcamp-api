import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const deleteOne: RoomHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.room.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

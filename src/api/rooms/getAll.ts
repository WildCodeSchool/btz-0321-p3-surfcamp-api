import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const getAll: RoomHandlers["getAll"] = async (req, res, next) => {
  try {
    const rooms = await prisma.room.findMany();

    res.setHeader("X-Total-Count", rooms.length);
    res.set({
      "X-Total-Count": rooms.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export default getAll;

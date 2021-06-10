import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const getAll: RoomHandlers["getAll"] = async (req, res) => {
  const rooms = await prisma.room.findMany();
  res.status(200).json(rooms);
};

export default getAll;

import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const getAll: RoomHandlers["getAll"] = async (req, res) => {
  const rooms = await prisma.room.findMany();
   res.setHeader("X-Total-Count", 200);
  res.set({
    "X-Total-Count": "100",
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(rooms);
};

export default getAll;

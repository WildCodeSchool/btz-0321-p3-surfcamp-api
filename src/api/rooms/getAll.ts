import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const getAll: RoomHandlers["getAll"] = async (req, res) => {
  const rooms = await prisma.room.findMany();
<<<<<<< HEAD
  res.setHeader("X-Total-Count", 200);
  res.set({
    "X-Total-Count": "100",
=======

  res.setHeader("X-Total-Count", rooms.length);
  res.set({
    "X-Total-Count": rooms.length,
>>>>>>> 7a13d668756f65440d913f22cc3786f667c69e41
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(rooms);
};

export default getAll;

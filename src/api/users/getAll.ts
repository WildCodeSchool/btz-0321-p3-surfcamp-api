import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const getAll: UserHandlers["getAll"] = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export default getAll;

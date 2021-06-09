import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const getAll: UserHandlers["getAll"] = async (req, res) => {
  const users = await prisma.user.findMany();
  res.setHeader('X-Total-Count',200)
  res.set({
    'X-Total-Count': '100',
    'Access-Control-Expose-Headers': 'X-Total-Count'
  })
  res.status(200).json(users);
};

export default getAll;

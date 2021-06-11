import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const getAll: FeatureHandlers["getAll"] = async (req, res) => {
  const features = await prisma.feature.findMany();
  res.setHeader("X-Total-Count", 200);
  res.set({
    "X-Total-Count": "100",
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(features);
};

export default getAll;

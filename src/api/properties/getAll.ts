import prisma from "../../../prisma/prismaClient";
import PropertyHandlers from "./interfaces";

/**
 * GET /properties
 * @summary View all properties
 * @tags properties
 * @return {array<DisplayProperty>} 200 - Property list successfully retrieved
 */

const getAll: PropertyHandlers["getAll"] = async (req, res, next) => {
  const { limit } = req.query;

  try {
    const properties = await prisma.property.findMany({
      take: limit ? (+limit as number | undefined) : undefined,
    });
    res.setHeader("X-Total-Count", properties.length);
    res.set({
      "X-Total-Count": properties.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export default getAll;

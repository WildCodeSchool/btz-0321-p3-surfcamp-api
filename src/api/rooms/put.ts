import prisma from '../../../prisma/prismaClient';

import RoomHandlers from './interfaces';

const put: RoomHandlers["put"] = async (req,res) => {
    const {id} = req.params;
    const { name, description, capacity, priceByNight } = req.body;

    await prisma.room.update({
        where: {id},
        data: {
            name,
            description,
            capacity,
            priceByNight,
        },
    });
    res.sendStatus(204);
};

export default put;
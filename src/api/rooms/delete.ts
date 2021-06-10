import prisma from '../../../prisma/prismaClient';

import RoomHandlers from './interfaces';

const deleteOne: RoomHandlers["delete"] = async (req, res) => {
    const {id} = req.params;

    await prisma.room.delete({
        where: {
            id,
        },
    });

    res.sendStatus(204)
};

export default deleteOne;
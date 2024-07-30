import { db } from '../utils/db';

export const getUserById = async (userId: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (user) {
            return {
                message: true,
            };
        } else {
            return {
                message: false,
            };
        }
    } catch (error) {
        return {
            message: false,
        };
    }
};

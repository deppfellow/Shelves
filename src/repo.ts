import { db } from './db';

export const getAllUsers = async () => {
    const text = 'SELECT * FROM users';

    try {
        const res = await db(text);
        console.log('Users:', res.rows);
        return res.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

getAllUsers();

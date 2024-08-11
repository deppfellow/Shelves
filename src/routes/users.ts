import { Hono } from 'hono';
import { getAllUsers } from '../repo';
// import { users } from '../schema';

const app = new Hono();

app.get('/', async (c) => {
    const users = await getAllUsers();

    return c.json(
        {
            message: 'Success',
            data: users,
        },
        200
    );
});

export default app;

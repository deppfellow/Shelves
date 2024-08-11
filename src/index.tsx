import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import Bookmarks from './routes/bookmarks';
import Users from './routes/users';

const app = new Hono();
const port: number = 3000;

interface Health {
    id: number;
    status: string;
}

let health_check: Health[] = [{ id: 200, status: 'OK' }]; // Health check

app.get('/healths', (c) => {
    return c.json(health_check, 200);
});

app.route('/bookmarks', Bookmarks);
app.route('/users', Users);
``;

serve({ fetch: app.fetch, port });

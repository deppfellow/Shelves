import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import Bookmarks from './routes/bookmarks';

const app = new Hono();
const port: number = 3000;

app.get('/', (c) => {
    return c.json({
        message: 'Success',
        data: "Welcome to X's bookmarks organizer!",
    });
});

app.route('/bookmarks', Bookmarks);

serve({ fetch: app.fetch, port });

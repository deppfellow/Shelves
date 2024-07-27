import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
    //   return c.text('Hello Hono!')
    return c.json({
        message: 'Hello, Hono!',
        query: c.req.query(),
    });
});

app.get('/html', (c) => {
    return c.html('<h1>Hello, Hono!</h1>');
});

app.get('/:param', (c) => {
    return c.json({
        message: 'Hello, Hono!',
        param: c.req.param(),
        query: c.req.query(),
    });
});

app.delete('/:param', (c) => {
    return c.json({
        message: 'Hello, Hono!',
        param: c.req.param(),
        query: c.req.query(),
    });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});

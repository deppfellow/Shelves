import { Hono } from 'hono';

const app = new Hono();

interface Bookmark {
    tweet_id: number;
    content: string;
    which_user: string;
    post_image_url: string;
}

let bookmark: Bookmark[] = [
    {
        tweet_id: 0,
        content: 'This is a bookmark',
        which_user: '@raidr',
        post_image_url: './assets/image_default.webp',
    },
];

app.get('/', (c) => {
    return c.json(
        {
            message: 'Success',
            data: bookmark,
        },
        200
    );
});

app.post('/', async (c) => {
    const body = await c.req.json();
    bookmark.push({ ...body, id: bookmark.length + 1 });

    return c.json(
        {
            message: 'Bookmark added',
            data: body,
        },
        201
    );
});

export default app;

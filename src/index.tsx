import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();
const port: number = 3000;

interface Relic {
    id: number;
    name: string;
    rarity: string;
    shop_cost: number;
    item_usage: string;
}

let relics: Relic[] = [
    {
        id: 1,
        name: 'Ursus Big Bread',
        rarity: 'Normal',
        shop_cost: 8,
        item_usage: 'Squad size limit +1',
    },
    {
        id: 2,
        name: 'Hot Water Kettle',
        rarity: 'Normal',
        shop_cost: 8,
        item_usage: '+2 life points and +1 hope',
    },
];

app.get('/relics', (c) => {
    return c.json(relics, 200);
});

app.get('/relics/:id', (c) => {
    const id = c.req.param('id');
    const relic = relics.find((relic) => relic.id === Number(id));
    if (relic) {
        return c.json(relic);
    }
    return c.json({ message: 'Relic not found' }, 404);
});

app.post('/relics', async (c) => {
    let newRelic = await c.req.json<Relic>();
    newRelic.id = relics.length + 1;

    relics.push(newRelic);

    return c.json(newRelic, 201);
});

app.delete('/relics', (c) => {
    relics = [];
    return c.json({ message: 'All relics deleted' }, 200);
});

app.delete('/relics/:id', (c) => {
    const id = c.req.param('id');
    relics = relics.filter((relic) => relic.id !== Number(id));
    return c.json({ message: `Relic with id ${id} deleted` }, 200);
});

serve({ fetch: app.fetch, port });

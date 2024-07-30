import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import fs, { readlinkSync } from 'node:fs';

const app = new Hono();
const port: number = 3000;

interface Relic {
    id: number;
    name: string;
    rarity: string;
    shop_cost: number;
    item_usage: string;
}

let relics = [
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

app.get('/relic', (c) => {
    return c.json(relics);
});

app.get('/relic/:id', (c) => {
    const id = c.req.param('id');
    const relic = relics.find((relic) => relic.id === Number(id));
    if (relic) {
        return c.json(relic);
    }
    return c.json({ message: 'Relic not found' });
});

app.post('relic', (c) => {
    const newRelic: Relic = {
        id: Number(c.req.query('id')),
        name: c.req.query('name') ?? 'Hope',
        rarity: c.req.query('rarity') ?? 'None',
        shop_cost: Number(c.req.query('shop_cost')),
        item_usage: c.req.query('item_usage') ?? 'Hope',
    };
    relics.push(newRelic);

    return c.json(newRelic, 201);
});

app.delete('/relic', (c) => {
    relics = [];
    return c.json({ message: 'All relics deleted' });
});

app.delete('/relic/:id', (c) => {
    const id = c.req.param('id');
    relics = relics.filter((relic) => relic.id !== Number(id));
    return c.json({ message: `Relic with id ${id} deleted` });
});

serve({ fetch: app.fetch, port });

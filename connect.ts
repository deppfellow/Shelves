import 'dotenv/config';
import * as pg from 'pg';

async function main() {
    const client = new pg.Client({
        host: '127.0.0.1',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    });

    await client.connect();
    const res = await client.query('SELECT * FROM users');

    console.log({ users: res.rows });
    await client.end();
}

main();

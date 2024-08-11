// This file used to connect into Postgres without using Drizzle ORM

import { Pool } from 'pg';
// import dotenv from 'dotenv';
// import path from 'path';

// const __dirname = import.meta.dirname;
// console.log(__dirname);

// dotenv.config({ path: path.resolve(__dirname, '../.env') });

const pool = new Pool({
    user: process.env.POSTGRES_USER || 'deppfellow',
    database: process.env.POSTGRES_DB || 'shelves_db',
    password: process.env.POSTGRES_PASSWORD || 'passwd',
    host: 'localhost',
    port: 5432,
});

export const db = (text: string, params?: any[]) => pool.query(text, params);

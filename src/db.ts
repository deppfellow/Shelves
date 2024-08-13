// This file used to connect into Postgres without using Drizzle ORM

import { Pool } from 'pg';
import './env';

// const __dirname = import.meta.dirname;
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: 5432,
});

export const db = (text: string, params?: any[]) => pool.query(text, params);

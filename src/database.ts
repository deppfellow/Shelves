// This file used to connect into Postgres using Drizzle ORM

import dotenv from 'dotenv';
import path from 'path';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const __dirname = import.meta.dirname;
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const client = postgres(
    `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`
);

export const db = drizzle(client, { schema });

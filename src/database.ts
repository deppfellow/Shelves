import dotenv from 'dotenv';
import path from 'path';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const __dirname = import.meta.dirname;
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });

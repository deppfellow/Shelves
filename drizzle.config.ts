import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

const POSTGRES_USER = process.env.POSTGRES_USER as string;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;
const POSTGRES_DB = process.env.POSTGRES_DB as string;

export default defineConfig({
    schema: './src/schema.ts',
    dialect: 'postgresql',
    out: './drizzle',
    dbCredentials: {
        host: 'localhost',
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
    },
});

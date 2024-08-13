declare module 'node' {
    interface Env {
        POSTGRES_HOST: string;
        POSTGRES_USER: string;
        POSTGRES_PASSWORD: string;
        POSTGRES_DB: string;
    }
}

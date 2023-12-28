import { Pool } from 'pg';

const connection = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PWD,
    port: parseInt(process.env.POSTGRES_PORT || ""),
});
export default connection;
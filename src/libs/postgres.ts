import { Client } from "pg";

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    // port: process.env.POSTGRES_PORT as unknown as number,
    user: 'santiagoapp',
    password: 'Test123!',
    database: 'my-store',
  });
  await client.connect();
  return client;
};

export default getConnection;

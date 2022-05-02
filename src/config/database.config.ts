import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.DB_POSTGRES_HOST,
  port: process.env.DB_POSTGRES_PORT,
  username: process.env.DB_POSTGRES_USERNAME,
  password: process.env.DB_POSTGRES_PASSWORD,
  databaseName: process.env.DB_POSTGRES_DATABASE_NAME,
}));

export default () => ({
  postgresHost: process.env.DB_POSTGRES_HOST,
  postgresPort: process.env.DB_POSTGRES_PORT,
  postgresUsername: process.env.DB_POSTGRES_USERNAME,
  postgresPassword: process.env.DB_POSTGRES_PASSWORD,
  postgresDatabaseName: process.env.DB_POSTGRES_DATABASE_NAME,
});

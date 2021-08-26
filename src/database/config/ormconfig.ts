import { env } from 'env';
import { ConnectionOptions } from 'typeorm';

const configuration: ConnectionOptions = {
  type: 'postgres',
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  logging: true,
  synchronize: false,
  entities: [__dirname + '/../../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default configuration;

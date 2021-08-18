import { ConnectionOptions } from 'typeorm';

export const configuration: ConnectionOptions = {
  type: 'postgres',
  name: '',
  host: '',
  port: 5432,
  username: '',
  password: '',
  database: '',
  logging: true,
  synchronize: true,
  entities: ['entity/*.ts'],
};

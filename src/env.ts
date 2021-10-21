import { portToNumber } from './core/functions/envfunctions';
import * as dotenv from 'dotenv';

dotenv.config();
//Environment variables; used for database connection
export const env = {
  app: {
    name: process.env.NAME,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  db: {
    type: process.env.DB_CONNECTION || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: portToNumber(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

import { ConfigTypes } from "./types";

require('dotenv').config();

const config: ConfigTypes = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:  process.env.DB_USER || '',
  dbPassword:  process.env.DB_PASSWORD || '',
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,
};

export default config;

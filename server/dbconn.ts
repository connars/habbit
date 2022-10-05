import Knex from 'knex';
import config from './config.be';

export default Knex({
  client: 'pg',
  connection: {
    host : config.DB_HOST,
    port : config.DB_PORT,
    user : config.DB_USER,
    password : config.DB_PASSWORD,
    database : config.DB_NAME
  },
  searchPath: ["public"],
});
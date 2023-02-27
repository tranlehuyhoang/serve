import { Sequelize } from "sequelize";

const db = new Sequelize(
    'testingdb111',
    'testingroot111',
    '25081992',
    // 'crudd',
    // 'root',
    // '',

    {
        port: 3306,
        host: 'db4free.net',
        dialect: 'mysql'
    }

);
export default db;
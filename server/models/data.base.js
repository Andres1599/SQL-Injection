import mysql from 'mysql2';

export default class DataBase {

    constructor() {}

    conn() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'sys_secure',
        });
    }

}
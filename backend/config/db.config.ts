import * as mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  database: 'ete_employees'
});

export default connection

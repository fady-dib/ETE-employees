import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connection from './config/db.config'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('TypeScript Server');
});

connection.connect((err : any) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  
  console.log('Connected to the database.');
  
  // Perform database operations
  // connection.query('SELECT * FROM your_table', (err :any, results:any) => {
  //   if (err) {
  //     console.error('Error executing query:', err);
  //   } else {
  //     console.log(results);
  //   }

  //   // Close the connection
  //   connection.end();
  // });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
import Profile from './profile';
import Expenses from './expenses';
import * as mysql from 'mysql';

export const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'companydb',
    port: 3306,
    multipleStatements: true,
});

Connection.connect(err => {
    if(err) console.log(err);
    else console.log("Connected to db");
});

export default {
    Profile,
    Expenses
}
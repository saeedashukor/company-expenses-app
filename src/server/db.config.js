module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "companydb",
    dialect: "mysql",
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  /*
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
*/
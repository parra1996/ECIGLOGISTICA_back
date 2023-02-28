module.exports = {
  "development": {
    "username":  process.env.USERNAME_ ||"root" ,
    "password":  process.env.PASSWORD || "1234",
    "database":  process.env.DATABASE ||"eciglogistica",
    "host":  process.env.HOST||"127.0.0.1" ,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USERNAME_,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}


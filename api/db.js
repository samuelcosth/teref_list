import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "levy26092024",
    database:"crud-alan"
});

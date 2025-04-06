/*
    1. DB 연동 라이브러리 호출(mysql2) => DB서버주소, USER , PASSWORD, PORT 
*/
import mysql from 'mysql2';


const pool = mysql.createPool({
    host: 'beautyofjoseon.cvuuqeau0uus.ap-northeast-2.rds.amazonaws.com', 
    port: 3306,
    user: 'admin',
    password: 'd201720006!s',
    database: 'beautydb',
    })


export const db = pool.promise();
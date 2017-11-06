const mysql2=require('mysql2'),
    config=require('../config.json');

const dbConfig={
    host:config.DB.HOST,
    user:config.DB.USER,
    password:config.DB.PASSWORD,
    database:config.DB.PASSWORD
};

exports.addTodo= (task,cb)=>{
    const conn=mysql2.createConnection(dbConfig);
    conn.query(
      `INSERT INTO todos(task,done) VALUES(?,'false')`,
      [task],
        (err,result)=>{
            if (err)
                throw err;
            cb();
        }
    );
};

exports.getTodos=(cb)=>{
  const conn=mysql2.createConnection(dbConfig);
  conn.query(
      `SELECT * FROM todos`,
        (err,results,fields)=>{
          if (err)
              throw err;
          cb(results);
        }
    )
};
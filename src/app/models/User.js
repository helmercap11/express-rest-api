
const sql = require('./db.js');


    const User = function(user) {
        this.name = user.name;
        this.lastname = user.lastname;
        this.email = user.email;
        this.number =user.number;
    };


   User.create = (newUser, result) => {
       sql.query("insert into usuario set ?", newUser, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
    
       });
      
   };

   User.getAll = (name, result) => {
    let query = "SELECT * FROM usuario";
    if (name) {
      query += ` WHERE name LIKE '%${this.name}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("usuarios: ", res);
      result(null, res);
    });
  };


   User.findById = (id, result) => {
       sql.query(`select * from usuario where id = ${id}`, (err, res) => {
           if(err) {
               console.log("error:", err);
               result(err, null);
           }

           if(res.length){
               console.log("found user:", res[0]);
               result(null, res[0]);
               return;
           }

           result({kind: "Not found"}, null);
       });
   };



module.exports = User;
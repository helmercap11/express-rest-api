
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




module.exports = User;
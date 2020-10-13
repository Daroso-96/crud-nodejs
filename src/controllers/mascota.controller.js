const controller ={};
//Operaciones del crud

controller.list = (req, res) => {
   req.getConnection((err ,conn) =>{
       conn.query('SELECT * FROM mascota', (err, mascotas) =>{
           if(err){
               res.json(err);
           }
           console.log(mascotas);
            res.render('mascotas', {
                data : mascotas
            })
       });
   });
};
controller.save = (req, res) =>{
    const data = req.body;
 req.getConnection((err, conn) =>{
     conn.query('INSERT INTO mascota set ? ', [data] , (err, mascota) =>{
         console.log(mascota);
         res.redirect('/');

     })
 })
};
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM mascota WHERE id = ?", [id], (err, rows) => {
        res.render('mascotas_update', {
          data: rows[0]
        })
      });
    });
  };
  
controller.update = (req, res) => {
    const { id } = req.params;
    const newMascota = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE mascota set ? where id = ?', [newMascota, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM mascota WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }

module.exports = controller;
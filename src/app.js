const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      
       mysql = require('mysql');
       myConnection = require('express-myconnection');
       app = express();
//Importar rutas

const mascotaRoutes = require('./routes/mascota');
//setting 

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Midleware
app.use(morgan('dev'));
app.use(myConnection(mysql ,{
    host :'localhost',
    user : 'root',
    password: '',
    port: 3306,
    database: 'mascotasnode',
    
}, 'single'));
app.use(express.urlencoded({ extended: false }))
//rutas
app.use('/' , mascotaRoutes);


//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));




//Inicializando el servidor
app.listen(app.get('port'),3000, () =>{
    console.log('Serve on port 3000');
})
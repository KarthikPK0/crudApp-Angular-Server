//import json-server
const jsonServer = require('json-server')
//create server for media player app
const CRUDAPPSERVER = jsonServer.create()
//create middleware 
const middleWare = jsonServer.defaults()
//set up route for json file in server
const route = jsonServer.router('db.json')
//set up port for running server app
const PORT = 3000 || Process.env.PORT

CRUDAPPSERVER.use(middleWare)
CRUDAPPSERVER.use(route)
CRUDAPPSERVER.listen(PORT,()=>{
    console.log(`CRUDAPPSERVER Server Started at port ${PORT} and waiting for client request`);
})
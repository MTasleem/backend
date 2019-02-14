const inventory = require('./controllers/inventory');
module.exports = function (app) {
  app.get('/getdemo', function (req, res) {
    res.send("data recieved");
  });
  // app.get('/allCustomers', inventory.getAllCustomer);
  // server.post('/insertData', inventory.insert);
  app.get("/api/getUser", inventory.getUser);
  app.get("/api/getAllQuestion", inventory.getAllQuestion);  
  app.post("/api/saveUser", inventory.saveUser);
  app.post('/api/delete/:id', inventory.deleteUser);

}

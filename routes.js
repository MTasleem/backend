const inventory = require('./controllers/inventory');
module.exports = function (app) {
  app.get('/getdemo', function (req, res) {
    res.send("data recieved");
  });
  app.get('/allCustomers', inventory.getAllCustomer);
  // server.post('/insertData', inventory.insert);  


};

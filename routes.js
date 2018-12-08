const inventory = require('./controllers/inventory');
module.exports = function (app) {
  app.get('/getdemo', function (req, res) {
    res.send("data recieved");
  });
  // server.get('/test', inventory.test);
  // server.post('/insertData', inventory.insert);  
  
  
};

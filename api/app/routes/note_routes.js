module.exports = function(app, db){
  app.post('/notes', (req, res) => {
    //Yo'll create your note here
    console.log(req.body);
    res.send('Hello')
    //console.log(req);
  });
};

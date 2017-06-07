var Tinyzoo = require('../models/tinyzoo');

module.exports.create = function (req, res) {
  var tinyzoo =  new Tinyzoo(req.body);
  tinyzoo.save(function (err, result)  {
    res.json(result);
  });
}
module.exports.list = function (req, res) {
  Tinyzoo.find({}, function (err, results) {
    res.json(results);
  });
}

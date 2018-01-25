const sortinator = require('./sortinator.js')

const routeToSort = (req, res) => {
  let respStr = sortinator(req.body.stringToSort);
  res.send(respStr);
}

module.exports.routeToSort = routeToSort;
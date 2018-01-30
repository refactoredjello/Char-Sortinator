const sortinator = require('./sortinator.js')

const routeToSort = (req, res) => {
  let respStr = sortinator(req.body.stringToSort);
  let respObj = {sortedString: respStr}
  res.send(respObj);
}

module.exports.routeToSort = routeToSort;
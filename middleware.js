module.exports = function(req, res, next) {
  if ( req.method === 'GET') {
    // TODO req パラメータとかボディの内容を分岐条件に使用したい
    res.statusCode = 201
  }
  next()
}

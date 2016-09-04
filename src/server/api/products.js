const role = 'products'
module.exports = function (apiVersion) {
  return [
    {
      method: 'GET',
      path: `/api/${apiVersion}/products`,
      handler: {
        act: { role, cmd: 'list' }
      }
    }
  ]
}

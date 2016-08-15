'use strict'
module.exports = function () {
  const seneca = this
  const role = 'products'
  seneca.add({role, cmd: 'list' }, cmd_list)

  seneca.listen()

  function cmd_list (args, done) {
    return done(null, [{ id: 1, name: 'product 1'}])
  }

  seneca.ready(() => {
    if (process && process.send) process.send('ready')
  })
}

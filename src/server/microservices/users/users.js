'use strict'
module.exports = function () {
  const seneca = this
  const role = 'users'

  seneca.add({role, cmd: 'whazzup'}, cmd_whazzup)

  seneca.listen()

  function cmd_whazzup (args, done) {
    return done(null, {reply: 'yo!' })
  }

  seneca.ready(() => {
    if (process && process.send) process.send('ready')
  })
}
